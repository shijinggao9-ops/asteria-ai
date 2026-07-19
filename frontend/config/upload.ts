export const UploadConfig = {
  maxFileSize: 50 * 1024 * 1024,

  maxPages: 500,

  maxCharacters: 500000,

  maxDocuments: 10,

  allowedTypes: [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
};