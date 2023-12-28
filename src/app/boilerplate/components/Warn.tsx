"use client";
import Lottie from "lottie-react";
import lottie from "lottie-web";
import WarnAnimation from "@/assets/WarnAnimation.json";
import { useEffect, useRef, useState } from "react";

/**
 * @param {number} value : 장애물과의 거리 값입니다. 값에 따라 사이즈, 투명도가 달라집니다.
 */
type WarnProps = {
  value?: number;
};

const Warn = ({ value = 0 }: WarnProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return <></>;
  return (
    <Lottie
      style={{
        width: `${value * 100}%`,
        height: `${value * 100}%`,
        opacity: `${value}`,
      }}
      animationData={WarnAnimation}
      loop={true}></Lottie>
  );
};

export default Warn;
