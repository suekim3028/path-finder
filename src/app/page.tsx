"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CameraView from "./_components/CameraView/CameraView";
import { useRef } from "react";
import PathFinder, { PathFinderRef } from "./_components/PathFinder/PathFinder";
import { API, APIInstance } from "@/apis";

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
