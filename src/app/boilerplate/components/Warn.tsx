"use client";
import Lottie from "lottie-react";
import lottie from "lottie-web";
import WarnAnimation from "@/assets/WarnAnimation.json";
import { Fragment, useEffect, useRef, useState } from "react";

/**
 * @param {number} value : 장애물과의 거리 값입니다. 값에 따라 사이즈, 투명도가 달라집니다.
 */
type WarnProps = {
  value?: number;
};

const Warn = ({ value = 0 }: WarnProps) => {
  return (
    <>
      {value > 0.7 ? (
        <Lottie
          style={{
            transform: `scale(${10 * value})`,
          }}
          animationData={WarnAnimation}
          loop={true}></Lottie>
      ) : (
        <div />
      )}
    </>
  );
};

export default Warn;
