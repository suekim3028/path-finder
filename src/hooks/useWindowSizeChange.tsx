import { DIMENSIONS } from "@/constants";
import React, { useCallback, useEffect, useState } from "react";

export const useOnWindowSizeChange = (
  cb: (viewport: { width: number; scale: number; height: number }) => void
) => {
  const getSize = useCallback(() => {
    const width =
      typeof window === "undefined"
        ? DIMENSIONS.WINDOW_MAX_WIDTH
        : Math.max(
            Math.min(window.innerWidth, DIMENSIONS.WINDOW_MAX_WIDTH),
            DIMENSIONS.WINDOW_MIN_WIDTH
          );
    const scale = typeof window === "undefined" ? 1 : window.innerWidth / width;
    const height = typeof window === "undefined" ? 0 : window.innerHeight;
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
