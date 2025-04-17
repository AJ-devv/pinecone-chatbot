import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await streamText({
    model: openai("process.env.OPENAI_API_KEY!", "gpt-4o")

  });

  return response.toAIStreamResponse();
}
