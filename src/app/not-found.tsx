import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center">
      <div>
        <p className="text-6xl font-bold text-zinc-700">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 inline-flex gap-3">
          <Button href="#home">Back to Home</Button>
          <Button href="#contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}