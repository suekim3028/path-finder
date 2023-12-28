"use client";

import { L } from "@/design-system";
import { useOnWindowSizeChange } from "@/hooks";
import { useCallback } from "react";

const CameraView = () => {
  useOnWindowSizeChange(useCallback((viewport) => getDevices(viewport), []));

  return (
    <L.FlexCol flex={1}>
      <video
        autoPlay
        disableRemotePlayback
        disablePictureInPicture
        id="videoElement"
        style={{
          width: "100%",
          height: "100%",
        }}
        controls={false}
        playsInline
      />
    </L.FlexCol>
  );
};

const getDevices = async ({
  width,
  height,
}: {
  width: number;
  scale: number;
  height: number;
}) => {
  alert(`${width} ${height}`);
  const _video = document.querySelector("#videoElement");

  if (!_video) return;

  try {
    const videoMediaStream = await navigator.mediaDevices?.getUserMedia({
      video: {
        facingMode: { exact: "environment" },
        width: { exact: width },
        height: { exact: height },
        aspectRatio: { exact: width / height },
      },
    });

    const video = _video as HTMLVideoElement;
    video.srcObject = videoMediaStream;
  } catch (e) {
    console.log("no back camera");
  }
};

export default CameraView;
