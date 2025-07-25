import Container from '@/components/ui/container';
import FaqClient from './faq-client';
import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered FAQ | CS Accountancy',
  description: 'Get instant answers to your accounting and tax questions with our AI-powered FAQ assistant. Available 24/7 to help you.',
};

export default function FaqPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-accent" />
          <h1 className="mt-4 font-headline text-4xl sm:text-5xl font-bold text-primary">
            AI-Powered FAQ
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Have a question? Our AI assistant is here to provide you with
            instant answers based on our extensive knowledge base. Just type
            your question below to get started.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <FaqClient />
        </div>
      </Container>
    </div>
  );
}
