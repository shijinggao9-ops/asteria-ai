export interface ResearchTask {

    id: string;

    title: string;

    description: string;

    status:
        | "pending"
        | "running"
        | "completed";

}

export interface ResearchPlan {

    title: string;

    objective: string;

    tasks: ResearchTask[];

}