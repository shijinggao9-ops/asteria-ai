import { ParsedDocument } from "@/services/document";
export interface Material {

  id: string;

  name: string;

  type: string;

  size: number;

  uploadedAt: string;

  parsed?: ParsedDocument;

}