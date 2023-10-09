// Remove this to test stack trace in prerendering
export const dynamic = "force-dynamic";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  // Can replace this signal with a native timeout signal for the same effect:
  // `AbortSignal.timeout(1)`
  const signal = makeTimeoutSignal(1);

  await fetch("https://example.com", {
    signal,
  });
  return null;
}

function makeTimeoutSignal(ms: number) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}
