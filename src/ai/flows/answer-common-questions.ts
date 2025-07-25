'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering common questions about accounting services.
 *
 * The flow uses a prompt to generate answers based on a given question and context.
 * It exports the following:
 * - `answerCommonQuestions`: An async function that takes a question as input and returns an answer.
 * - `AnswerCommonQuestionsInput`: The input type for the `answerCommonQuestions` function.
 * - `AnswerCommonQuestionsOutput`: The output type for the `answerCommonQuestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerCommonQuestionsInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
  context: z
    .string()
    .optional()
    .describe('Additional context to help answer the question.'),
});
export type AnswerCommonQuestionsInput = z.infer<typeof AnswerCommonQuestionsInputSchema>;

const AnswerCommonQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerCommonQuestionsOutput = z.infer<typeof AnswerCommonQuestionsOutputSchema>;

export async function answerCommonQuestions(input: AnswerCommonQuestionsInput): Promise<AnswerCommonQuestionsOutput> {
  return answerCommonQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerCommonQuestionsPrompt',
  input: {schema: AnswerCommonQuestionsInputSchema},
  output: {schema: AnswerCommonQuestionsOutputSchema},
  prompt: `You are an expert accounting assistant. Answer the following question based on the context provided. If the answer is not in the context, answer to the best of your knowledge.\n\nQuestion: {{{question}}}\n\nContext: {{{context}}}`,
});

const answerCommonQuestionsFlow = ai.defineFlow(
  {
    name: 'answerCommonQuestionsFlow',
    inputSchema: AnswerCommonQuestionsInputSchema,
    outputSchema: AnswerCommonQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
