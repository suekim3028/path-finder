import { uploadImage } from "@/apis/common.apis";
import { DIMENSIONS } from "@/constants";
import { Grid } from "@/design-system/layouts/Grid";
import dynamic from "next/dynamic";
import {
  Fragment,
  Suspense,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
const Warn = dynamic(() => import("../../boilerplate/components/Warn"), {
  ssr: false,
});

const PathFinder = forwardRef<PathFinderRef>((_props, ref) => {
  const [matrix, setMatrix] = useState<number[][]>(
    Array.from({ length: 8 }, () => Array.from({ length: 4 }, () => 0))
  );
  const currentMatrixTimestamp = useRef(0);

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

  return (
    <Grid
      style={{
        width: "100dvw",
        height: "100dvh",
        position: "absolute",
        top: 0,
        left: 0,
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridTemplateRows: `repeat(8,1fr)`,
      }}>
      {matrix.map((arr, i) => (
        <Fragment key={i}>
          {arr.map((value, idx) => (
            <Warn key={i * arr.length + idx} value={value} />
          ))}
        </Fragment>
      ))}
    </Grid>
  );
});

export type PathFinderRef = {
  onCapture: (image: File) => void;
};

PathFinder.displayName = "PathFinder";
export default PathFinder;
