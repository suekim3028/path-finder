"use client";

import { commonApi } from "@/apis";

import { DIMENSIONS } from "@/constants";
import { L } from "@/design-system";
import { useOnWindowSizeChange } from "@/hooks";
import useClientErrorSnackbar from "@/hooks/useClientErrorSnackbar";
import { useCallback, useRef } from "react";

const CameraView = ({ onCapture }: { onCapture?: (image: File) => void }) => {
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const { onError, ErrorSnackbar } = useClientErrorSnackbar();

  useOnWindowSizeChange(
    useCallback(() => {
      getDevices(handleOnFindCamera);
    }, [])
  );

  const handleOnFindCamera = (hasCamera: boolean) => {
    if (hasCamera) {
      intervalId.current = setInterval(async () => {
        const _video = document.getElementById("videoElement");
        const _canvas = document.getElementById("canvas");
        if (!_canvas || !_video) return;
        const canvas = _canvas as HTMLCanvasElement;
        const video = _video as HTMLVideoElement;

        canvas.width = DIMENSIONS.SCREEN_WIDTH;
        canvas.height = DIMENSIONS.SCREEN_HEIGHT;

        const context = canvas.getContext("2d");
        if (!context) return;

        !!context &&
          context.drawImage(
            video,
            0,
            0,
            DIMENSIONS.SCREEN_WIDTH,
            DIMENSIONS.SCREEN_HEIGHT
          );

        try {
          canvas.toBlob(async (blob) => {
            if (!blob) return;
            const file = new File([blob], "fileName.jpg", {
              type: "image/jpeg",
            });
            onCapture && onCapture(file);
          }, "image/jpeg");
        } catch (e) {
          onError();
        }
      }, 10000);
    } else {
      intervalId.current && clearInterval(intervalId.current);
    }
  };

  return (
    <>
      <L.FlexCol w="100%" h={"100%"} style={{ position: "relative" }}>
        <video
          autoPlay
          disableRemotePlayback
          disablePictureInPicture
          width={"100%"}
          height={"100%"}
          id="videoElement"
          style={{
            objectFit: "fill",
            opacity: 0.2,
            // resize: "both",
          }}
          controls={false}
          playsInline
        />
        <canvas
          id={"canvas"}
          style={{ position: "absolute", top: "100%", left: "100%" }}
        />
      </L.FlexCol>
      {ErrorSnackbar}
    </>
  );
};

const getDevices = async (onFindCamera: (hasCamera: boolean) => void) => {
  const _video = document.querySelector("#videoElement");

  if (!_video) return;

  try {
    const videoMediaStream = await navigator.mediaDevices?.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
      },
    });

    const video = _video as HTMLVideoElement;
    video.srcObject = videoMediaStream;

    onFindCamera(true);
  } catch (e) {
    console.log("no back camera");
    onFindCamera(false);
  }
};

export default CameraView;
