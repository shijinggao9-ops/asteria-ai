export interface ParsedDocument {

  fileName: string;

  fileType: string;

  fileSize: number;

  text: string;

  pageTexts: string[];

  pages: number;

  words: number;

  characters: number;

}