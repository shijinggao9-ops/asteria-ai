import { ollama, MODEL, TEMPERATURE } from "../llm/ollama";

export abstract class BaseAgent {

    protected async chat(

        system: string,

        user: string

    ): Promise<string> {

        const completion = await ollama.chat.completions.create({

            model: MODEL,

            temperature: TEMPERATURE,

            messages: [

                {

                    role: "system",

                    content: system,

                },

                {

                    role: "user",

                    content: user,

                }

            ]

        });

        return completion.choices[0].message.content ?? "";

    }

}