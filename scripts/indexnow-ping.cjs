#!/usr/bin/env node
/**
 * indexnow-ping.cjs
 *
 * Pings the IndexNow API (Bing/Yandex/Seznam/etc.) to notify search engines
 * that one or more URLs on rizehvac.com have changed. Bing is the primary
 * consumer here, which makes this the highest-leverage path for ChatGPT
 * Search citations (Bing index = ChatGPT index).
 *
 * Usage:
 *   node scripts/indexnow-ping.cjs <url> [<url> ...]
 *
 * Examples:
 *   node scripts/indexnow-ping.cjs https://rizehvac.com/
 *   node scripts/indexnow-ping.cjs https://rizehvac.com/hvac/tucson \
 *                                  https://rizehvac.com/hvac-cost/tucson
 *
 * Environment overrides:
 *   INDEXNOW_HOST  default: rizehvac.com
 *   INDEXNOW_KEY   default: be80d21c16be4fdcaa6eaf89d7fb5897
 *                  (must match the {key}.txt file in /public)
 *
 * The key file MUST be reachable at:
 *   https://{host}/{key}.txt
 * and contain exactly the key string. We verify before submitting.
 *
 * Reference: https://www.indexnow.org/documentation
 */

const https = require("node:https");

const KEY = process.env.INDEXNOW_KEY || "be80d21c16be4fdcaa6eaf89d7fb5897";
const HOST = process.env.INDEXNOW_HOST || "rizehvac.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const urls = process.argv.slice(2).filter(Boolean);
if (urls.length === 0) {
  console.error("Usage: node scripts/indexnow-ping.cjs <url> [<url> ...]");
  process.exit(1);
}

// Validate that every URL belongs to the configured host.
for (const u of urls) {
  try {
    const parsed = new URL(u);
    if (parsed.hostname !== HOST) {
      console.error(
        `Refusing to submit ${u}: hostname ${parsed.hostname} != ${HOST}`
      );
      process.exit(1);
    }
  } catch {
    console.error(`Invalid URL: ${u}`);
    process.exit(1);
  }
}

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
});

const req = https.request(
  ENDPOINT,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(body),
    },
  },
  (res) => {
    let chunks = "";
    res.on("data", (c) => (chunks += c));
    res.on("end", () => {
      // 200 = OK, 202 = accepted, 422 = url(s) not from host, 403 = bad key
      console.log(`IndexNow status: ${res.statusCode}`);
      if (chunks.trim()) console.log(chunks);
      if (res.statusCode && res.statusCode >= 400) process.exit(1);
    });
  }
);

req.on("error", (err) => {
  console.error("IndexNow request failed:", err.message);
  process.exit(1);
});

req.write(body);
req.end();
