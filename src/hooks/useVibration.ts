import { useEffect, useRef } from "react";

export const useVibration = (matrix: number[][]) => {
  const intervalRef = useRef<null | NodeJS.Timeout>(null);
  const successRef = useRef(false);

  useEffect(() => {
    const max = Math.max(...matrix.map((m) => Math.max(...m.slice(1, -1))));
    if (intervalRef.current) clearInterval(intervalRef.current);
    const threshold = 0.7;

    if (max < threshold) {
      if (!successRef.current) {
        var sound = new Audio("https://bigsoundbank.com/UPLOAD/wav/2262.wav");
        sound.play();
        successRef.current = true;
      }
      return;
    }

    successRef.current = false;

    const durationMin = 250;
    const durationMax = 700;
    const durationDiff = durationMax - durationMin;

    const intervalMin = 200;
    const intervalMax = 1000;
    const intervalDiff = intervalMax - intervalMin;

    const duration = durationMin + (durationDiff / (1 - threshold)) * (1 - max);
    const interval = intervalMin + (intervalDiff / (1 - threshold)) * (1 - max);

    console.log(interval);

    var sound = new Audio("https://bigsoundbank.com/UPLOAD/wav/2066.wav");
    intervalRef.current = setInterval(() => {
      sound.play();
    }, interval);

    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
  }, [matrix]);
};
