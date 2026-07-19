import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | First Class Private School",
};

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-serif text-6xl text-burgundy md:text-8xl">404</h1>
          <h2 className="mt-4 font-serif text-2xl text-charcoal md:text-3xl">
            Page not found
          </h2>
          <p className="mt-4 text-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button as="a" href="/" className="mt-8">
            Back to homepage
          </Button>
        </div>
      </Container>
    </main>
  );
}
