// Remove this to test stack trace in prerendering
export const dynamic = "force-dynamic";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  await fetch("https://example.com", {
    signal: AbortSignal.timeout(1),
  });
  return null;
}
