'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { answerCommonQuestions } from '@/ai/flows/answer-common-questions';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const sampleQuestions = [
  'What services do you offer for small businesses?',
  'How do you handle tax preparation?',
  'What are your business advisory services?',
  'What information do I need to start with bookkeeping?',
];

export default function FaqClient() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [askedQuestion, setAskedQuestion] = useState('');

  const handleSubmit = async (currentQuestion: string) => {
    if (!currentQuestion.trim() || isLoading) return;

    setIsLoading(true);
    setError('');
    setAnswer('');
    setAskedQuestion(currentQuestion);

    try {
      const response = await answerCommonQuestions({ question: currentQuestion });
      setAnswer(response.answer);
    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(question);
  };
  
  const handleSampleQuestionClick = (q: string) => {
    setQuestion(q);
    handleSubmit(q);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-center">Ask a Question</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            disabled={isLoading}
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading || !question.trim()} size="icon">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Submit</span>
          </Button>
        </form>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Or try a sample question:</p>
          <div className="flex flex-wrap gap-2">
            {sampleQuestions.map((q) => (
              <Button key={q} variant="outline" size="sm" onClick={() => handleSampleQuestionClick(q)} disabled={isLoading}>
                {q}
              </Button>
            ))}
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {(isLoading || answer || askedQuestion) && (
          <div className="space-y-4 pt-4 border-t">
            {askedQuestion && !isLoading && (
              <div className="flex items-start gap-4">
                <User className="h-8 w-8 text-primary mt-1" />
                <div>
                  <p className="font-bold">You asked:</p>
                  <p className="text-muted-foreground">{askedQuestion}</p>
                </div>
              </div>
            )}
            {isLoading && (
              <div className="flex items-center gap-4 text-muted-foreground">
                <Loader2 className="h-6 w-6 animate-spin" />
                <p>Our AI is thinking...</p>
              </div>
            )}
            {answer && (
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <Bot className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                    <p className="font-bold">AI Assistant:</p>
                    <p className="whitespace-pre-wrap">{answer}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
