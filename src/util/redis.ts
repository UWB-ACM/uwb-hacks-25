import "server-only";

import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

/**
 * Creates a key from a series of parts, ensuring that it's safe
 * to use with user input.
 */
export function buildKey(...args: string[]): string {
  // 100 is arbitrary, just to ensure that very big keys can't be sent.
  // As ":" is used as a path separator, we just need to ensure that any
  // single ":" doesn't exist to prevent any ambiguity between keys,
  // which replacing it with "::" achieves.
  return args
    .map((arg) => arg.substring(0, 100).replaceAll(":", "::"))
    .join(":");
}
