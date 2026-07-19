import { PDFParse } from "pdf-parse";

export async function parsePDF(buffer: Buffer) {
  const parser = new PDFParse({ data: buffer });

  const result = await parser.getText();

  await parser.destroy();

  return {
    text: result.text,
    pages: result.pages.length,
  };
}