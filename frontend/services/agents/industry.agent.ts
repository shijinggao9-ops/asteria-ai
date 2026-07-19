import { ollama, MODEL, TEMPERATURE } from "../llm/ollama";
import { industryPrompt } from "../prompts/industry.prompt";
import { ResearchContext } from "@/types/research";

export async function runIndustryAgent(
  context: ResearchContext
): Promise<string> {

  const completion = await ollama.chat.completions.create({

    model: MODEL,

    temperature: TEMPERATURE,

    messages: [

      {
        role: "system",
        content: industryPrompt,
      },

      {
        role: "user",
        content: `
Case:

${context.description}

Objective:

${context.objective}
`,
      },

    ],

  });

  return completion.choices[0].message.content ?? "";
}