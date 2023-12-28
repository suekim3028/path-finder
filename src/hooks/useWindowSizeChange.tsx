import { DIMENSIONS } from "@/constants";
import React, { useCallback, useEffect, useState } from "react";

export const useOnWindowSizeChange = (
  cb: (viewport: { width: number; scale: number; height: number }) => void
) => {
  const getSize = useCallback(() => {
    const width = DIMENSIONS.SCREEN_WIDTH;
    const scale = typeof window === "undefined" ? 1 : window.innerWidth / width;
    const height = DIMENSIONS.SCREEN_HEIGHT;
    return { width, scale, height };
  }, []);

  const handleResize = useCallback(() => {
    cb(getSize());
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
