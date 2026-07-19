import { ParsedDocument } from "./types";

export async function parsePDF(
  file: File
): Promise<ParsedDocument> {

  const formData = new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await fetch(

      "/api/document",

      {

        method: "POST",

        body: formData,

      }

    );

  if (!response.ok) {

    throw new Error(

      "PDF parse failed."

    );

  }

  return response.json();

}