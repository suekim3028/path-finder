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
