import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await streamText({
    model: openai("gpt-4o"), // ✅ CORRECT way — only one argument
    messages,
  });

  return response.toAIStreamResponse();
}
