import { Material } from "./material";

export interface Project {

  id: string;

  title: string;

  researchType:
    | "Case Analysis"
    | "Business Competition"
    | "Thesis Research"
    | "Consulting Project";

  status:
    | "Draft"
    | "Completed";

  createdAt: string;

  updatedAt: string;

  // Workspace

  description: string;
  objective: string;
  outputs: string[];
  plan: string[];
  materials: Material[];
  report: string;

}