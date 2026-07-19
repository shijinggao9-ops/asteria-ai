import * as PdfParse from "pdf-parse-new";

import { ParsedDocument } from "./types";

export async function parsePDF(
  file: File
): Promise<ParsedDocument> {

  const buffer = Buffer.from(
    await file.arrayBuffer()
  );

  const pdf = await PdfParse.default(buffer);

  const text = pdf.text ?? "";

  return {

    fileName: file.name,
    fileType: file.type,
    fileSize: file.size,
    pageTexts: [text],
    text,
    pages: pdf.numpages,

    words:
      text
        .trim()
        .split(/\s+/)
        .filter(Boolean).length,

    characters: text.length,

  };

}