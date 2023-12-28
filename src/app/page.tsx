import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CameraView from "./_components/CameraView/CameraView";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { RecoilRoot } from "recoil";

export default function Home() {
  return <CameraView />;
}
