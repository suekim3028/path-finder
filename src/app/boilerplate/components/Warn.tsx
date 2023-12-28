"use client";

import lottie from "lottie-web";
import WarnAnimation from "@/assets/WarnAnimation.json";
import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * @param {number} value : 장애물과의 거리 값입니다. 값에 따라 사이즈, 투명도가 달라집니다.
 */
type WarnProps = {
  value?: number;
};

export const Warn = ({ value = 0 }: WarnProps) => {
  const warnRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    lottie.loadAnimation({
      container: warnRef?.current as Element, // the dom element
      name: "warning",
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: WarnAnimation, // the animation data
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }, []);
  return (
    <div
      ref={warnRef}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        opacity: `${value}`,
        zIndex: 10,
        mixBlendMode: "color",
        color: "white",
        overflow: "visible",
      }}
    />
  );
};
