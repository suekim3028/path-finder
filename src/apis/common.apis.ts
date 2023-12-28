import { APIInstance } from ".";
import { ApiType } from "@/types";

/**
 * dummy
 */

export type GetAResponse = {
  a: string[];
};

export const getApiTest = async () => {
  return new Promise((resolve: (data: { test: string }) => void) => {
    setTimeout(() => {
      resolve({ test: "true" });
    }, 1000);
  });
  // return APIInstance.get<GetAResponse>("");
};

type UploadImageData = {
  path: string;
  mime: string; //  image MIME type (image/jpeg, image/png, etc)
};

export const uploadImage = ({ path, mime }: UploadImageData) => {
  const formData = new FormData();
  formData.append("image", {
    uri: path,
    name: `${Date.now()}_${Math.floor(Math.random() * 1234567890876543)}`,
    type: mime,
  } as unknown as Blob);

  return APIInstance.post<{}>("", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
