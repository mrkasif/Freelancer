"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-5">
        <div className="text-center max-w-md">
          <p className="text-5xl font-bold text-zinc-700">Error</p>
          <h1 className="mt-4 text-xl font-semibold text-white">
            Something went wrong
          </h1>
          <p className="mt-3 text-zinc-400 text-sm">
            An unexpected error occurred. You can try again below.
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}