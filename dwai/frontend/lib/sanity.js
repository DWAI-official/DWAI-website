import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2025-02-19";

export const client = createClient({
  projectId: projectId || "pxprm93j",
  dataset: dataset || "production",
  token: process.env.SANITY_API_READ_TOKEN,
  apiVersion,
  perspective: "published",
  useCdn: true,
});

const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const isTransientError = (error) => {
  const status = error?.statusCode || error?.response?.statusCode;
  return (
    error?.isNetworkError ||
    error?.name === "TypeError" ||
    status === 408 ||
    status === 429 ||
    status >= 500
  );
};

/**
 * Fetch published Sanity content with bounded retries for temporary network
 * failures. GROQ/authentication errors are surfaced immediately.
 */
export async function sanityFetch({ query, params = {}, retries = 2 }) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await client.fetch(query, params);
    } catch (error) {
      lastError = error;
      if (!isTransientError(error) || attempt === retries) break;
      await wait(300 * 2 ** attempt);
    }
  }

  throw new Error("Sanity content is temporarily unavailable.", {
    cause: lastError,
  });
}
