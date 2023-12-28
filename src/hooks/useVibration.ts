import { THRESHOLD } from "@/constants";
import { useEffect, useRef } from "react";

export const useVibration = (matrix: number[][]) => {
  const successRef = useRef(false);
  const errorRef = useRef(0);

  useEffect(() => {
    const _canvas = document.getElementById("canvas");
    _canvas?.click();
    const max = Math.max(...matrix.map((m) => Math.max(...m.slice(1, -1))));

    const successSound = new Audio(
      "https://bigsoundbank.com/UPLOAD/wav/2262.wav"
    );
    const errorSound = new Audio(
      "https://bigsoundbank.com/UPLOAD/wav/2066.wav"
    );

    if (max < THRESHOLD) {
      if (!successRef.current) {
        successSound.play();
        successRef.current = true;
      }
      return;
    }

    successRef.current = false;
    if (errorRef.current === 0) errorSound.play();
    errorRef.current = (errorRef.current + 1) % 4;
  }, [matrix]);
};
