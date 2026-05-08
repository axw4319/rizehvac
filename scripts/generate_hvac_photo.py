#!/usr/bin/env python3
"""Generate Tucson HVAC photography via Imagen 4 + Upscayl.

Usage:
    python3 scripts/generate_hvac_photo.py "<prompt>" <slug> [aspect_ratio]

Example:
    python3 scripts/generate_hvac_photo.py \
      "A NATE-certified HVAC technician in clean uniform inspecting a Trane outdoor condenser unit on a Tucson home patio at golden hour, Catalina mountains in soft-focus background, saguaro cactus, hospitality magazine quality" \
      tucson-installer-catalina

Saves to:
    public/photos/<slug>-2400.webp
    public/photos/<slug>-1920.webp
    public/photos/<slug>-1200.webp
"""

from __future__ import annotations
import os
import sys
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / "public" / "photos"

ENV_CANDIDATES = [
    Path.home() / "Claude" / "revfactor-calculator" / ".env",
    Path.home() / "Claude" / "cynthiastayscurated-calculator" / ".env",
]


def load_api_key() -> str:
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    for path in ENV_CANDIDATES:
        if not path.exists():
            continue
        for line in path.read_text().splitlines():
            line = line.strip()
            if line.startswith("GEMINI_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise RuntimeError("GEMINI_API_KEY not found")


def main():
    if len(sys.argv) < 3:
        print("usage: generate_hvac_photo.py \"<prompt>\" <slug> [aspect_ratio]", file=sys.stderr)
        sys.exit(1)
    prompt = sys.argv[1]
    slug = sys.argv[2].strip("/")
    aspect_ratio = sys.argv[3] if len(sys.argv) > 3 else "16:9"

    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    api_key = load_api_key()

    from google import genai
    from google.genai import types

    client = genai.Client(api_key=api_key)

    full_prompt = (
        prompt
        + " · Style: editorial photography for a premium home-services directory, natural light, "
          "documentary realism, no text, no watermarks, no logos, soft Tucson desert palette of "
          "warm terracotta and dusty teal, slight film grain"
    )

    print(f"→ Generating: {prompt[:80]}...")
    print(f"→ Aspect:     {aspect_ratio}")
    print(f"→ Output:     {OUT_ROOT / slug}-{{2400,1920,1200}}.webp")

    resp = None
    for model in ("imagen-4.0-ultra-generate-001", "imagen-4.0-generate-001", "imagen-4.0-fast-generate-001"):
        try:
            r = client.models.generate_images(
                model=model,
                prompt=full_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio=aspect_ratio,
                    person_generation="ALLOW_ADULT",
                ),
            )
            if r.generated_images:
                print(f"  model used: {model}")
                resp = r
                break
        except Exception as e:
            print(f"  ! {model} failed: {e}")
            continue

    if resp is None or not resp.generated_images:
        print("All Imagen model attempts failed.", file=sys.stderr)
        sys.exit(2)

    raw = OUT_ROOT / f"{slug}-raw.png"
    resp.generated_images[0].image.save(str(raw))
    print(f"  saved raw: {raw.name}")

    upscaled = OUT_ROOT / f"{slug}-upscaled.png"
    upscayl_bin = "/Applications/Upscayl.app/Contents/Resources/bin/upscayl-bin"
    upscayl_models = "/Applications/Upscayl.app/Contents/Resources/models"
    upscayl_model = os.environ.get("UPSCAYL_MODEL", "ultrasharp-4x")

    source_for_webp = raw
    if Path(upscayl_bin).exists():
        print(f"  upscaling 4x via Upscayl ({upscayl_model})...")
        try:
            subprocess.run(
                [upscayl_bin, "-i", str(raw), "-o", str(upscaled),
                 "-n", upscayl_model, "-m", upscayl_models, "-s", "4"],
                check=True,
                capture_output=True,
                timeout=240,
            )
            source_for_webp = upscaled
            print(f"  upscaled: {upscaled.name}")
        except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
            print(f"  ! Upscayl failed: {e}. Falling back to raw.")

    for w in (2400, 1920, 1200):
        out = OUT_ROOT / f"{slug}-{w}.webp"
        subprocess.run(
            ["cwebp", "-q", "85", "-resize", str(w), "0", str(source_for_webp), "-o", str(out)],
            check=True,
            capture_output=True,
        )
        print(f"  saved webp: {out.name}")

    raw.unlink(missing_ok=True)
    if upscaled.exists():
        upscaled.unlink()
    print(f"\nDone: <img src=\"/photos/{slug}-2400.webp\" />")


if __name__ == "__main__":
    main()
