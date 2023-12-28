"use client";
import { API } from "@/apis";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useRef } from "react";
import CameraView from "./_components/CameraView/CameraView";
import PathFinder, { PathFinderRef } from "./_components/PathFinder/PathFinder";

export default function Home() {
  const pathFinderRef = useRef<PathFinderRef>(null);

  return (
    <>
      <CameraView
        onCapture={(file) => {
          pathFinderRef.current?.onCapture(file);
        }}
      />
      <PathFinder ref={pathFinderRef} />
    </>
  );
}
API.initialize();
