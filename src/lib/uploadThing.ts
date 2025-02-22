import { createUploadthing } from "@uploadthing/react";

// Define Upload Config
export const ourFileRouter = {
  avatarUploader: createUploadthing()
    .fileTypes(["image"])
    .maxSize("1MB")
    .onUploadComplete(({ file }) => ({
      url: file.url,
    })),
};
