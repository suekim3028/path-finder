import { APIInstance } from ".";

type UploadImageData = {
  path: string;
  mime: string; //  image MIME type (image/jpeg, image/png, etc)
};

type UploadImageResponse = {
  timestamp: number;
  depth: number[][];
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return APIInstance.post<UploadImageResponse>("images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
