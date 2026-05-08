import { Star } from "lucide-react";

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && hasHalf;
        return (
          <span key={i} style={{ position: "relative", lineHeight: 0 }}>
            <Star
              size={size}
              strokeWidth={1.5}
              style={{ color: "var(--brand-rating)" }}
              fill={isFull ? "var(--brand-rating)" : "transparent"}
            />
            {isHalf ? (
              <Star
                size={size}
                strokeWidth={1.5}
                fill="var(--brand-rating)"
                style={{
                  position: "absolute",
                  inset: 0,
                  clipPath: "inset(0 50% 0 0)",
                  color: "var(--brand-rating)",
                }}
              />
            ) : null}
          </span>
        );
      })}
    </span>
  );
}
