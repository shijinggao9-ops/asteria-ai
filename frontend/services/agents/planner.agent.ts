import { BaseAgent } from "./base.agent";

import { plannerPrompt } from "../prompts/planner.prompt";

import { ResearchContext } from "@/types/research";

import { ResearchPlan } from "@/types/planner";

class PlannerAgent extends BaseAgent {

    async run(

        context: ResearchContext

    ): Promise<ResearchPlan> {

        const result = await this.chat(

            plannerPrompt,

            `
Case Description:

${context.description}

Research Objective:

${context.objective}
`
        );

        return JSON.parse(result);

    }

}

export const plannerAgent = new PlannerAgent();