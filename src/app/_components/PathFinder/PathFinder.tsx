import { uploadImage } from "@/apis/common.apis";
import { useVibration } from "@/hooks";
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const PathFinder = forwardRef<PathFinderRef>((_props, ref) => {
  const [matrix, setMatrix] = useState<number[][]>(
    Array.from({ length: 8 }, () => Array.from({ length: 4 }, () => 0))
  );
  const currentMatrixTimestamp = useRef(0);

  useVibration(matrix);

  useImperativeHandle(
    ref,
    useCallback(
      () => ({
        onCapture: async (image: File) => {
          const res = await uploadImage(image);
          console.log(res);
          const { depth, timestamp } = res;

          console.log({ depth, timestamp });
          if (currentMatrixTimestamp.current > timestamp) return;
          currentMatrixTimestamp.current = timestamp;

          setMatrix(depth);
        },
      }),
      []
    )
  );

  return <></>;
});

export type PathFinderRef = {
  onCapture: (image: File) => void;
};

PathFinder.displayName = "PathFinder";
export default PathFinder;
