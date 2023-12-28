import { APIInstance } from ".";
import { ApiType } from "@/types";

/**
 * dummy
 */

export type GetAResponse = {
  a: string[];
};

export const getNoticeList = () => {
  return APIInstance.get<GetAResponse>("");
};
