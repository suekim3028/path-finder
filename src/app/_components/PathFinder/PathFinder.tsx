import { uploadImage } from "@/apis/common.apis";
import { Grid } from "@/design-system/layouts/Grid";
import { useVibration } from "@/hooks";
import useBarrierWarning from "@/hooks/useBarrierWarning";
import dynamic from "next/dynamic";
import {
  Fragment,
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
  const { onWarn, WarningSnackbar } = useBarrierWarning();
  const currentMatrixTimestamp = useRef(0);

  useVibration(matrix);

  useImperativeHandle(
    ref,
    useCallback(
      () => ({
        onCapture: async (image: File) => {
          const res = await uploadImage(image);
          const { depth, timestamp } = res;

          if (currentMatrixTimestamp.current > timestamp) return;
          currentMatrixTimestamp.current = timestamp;

          const max = Math.max(...depth.map((i) => Math.max(...i)));

          onWarn(max > 0.7);

          setMatrix(depth);
        },
      }),
      []
    )
  );

  return (
    <>
      {/* <AlertChip warn={matrix && true} /> */}
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
        }}
      >
        {matrix.map((arr, row) => (
          <Fragment key={row}>
            {arr.map((item, idx) => (
              <Warn key={idx} value={item} />
            ))}
          </Fragment>
        ))}
      </Grid>
      {WarningSnackbar}
    </>
  );
});

export type PathFinderRef = {
  onCapture: (image: File) => void;
};

PathFinder.displayName = "PathFinder";
export default PathFinder;
