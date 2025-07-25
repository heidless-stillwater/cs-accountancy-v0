import { Loader2 } from "lucide-react";
import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <Container className="flex flex-col items-center justify-center gap-4 text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
            <h1 className="font-headline text-2xl font-semibold">Loading Page...</h1>
            <p className="text-muted-foreground">Please wait a moment.</p>
        </Container>
    </div>
  );
}
