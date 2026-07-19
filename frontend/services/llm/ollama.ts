import OpenAI from "openai";

export const ollama = new OpenAI({

    baseURL: "http://localhost:11434/v1",

    apiKey: "ollama"

});

export const MODEL = "qwen3:8b";

export const TEMPERATURE = 0.2;