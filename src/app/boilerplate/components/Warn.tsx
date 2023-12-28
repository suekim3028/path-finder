"use client";
import Lottie from "lottie-react";
import lottie from "lottie-web";
import WarnAnimation from "@/assets/WarnAnimation.json";
import { Fragment, useEffect, useRef, useState } from "react";
import { DIMENSIONS, THRESHOLD } from "@/constants";
import { L } from "@/design-system";

/**
 * @param {number} value : 장애물과의 거리 값입니다. 값에 따라 사이즈, 투명도가 달라집니다.
 */
type WarnProps = {
  value?: number;
};

const Warn = ({ value = 0 }: WarnProps) => {
  const cellWidth = DIMENSIONS.SCREEN_WIDTH / 4;

  const size = cellWidth * (5 * (value - THRESHOLD + 0.3));

  return (
    <>
      {value > THRESHOLD ? (
        <L.LayoutBase w={size} h={size}>
          <Lottie
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
            animationData={WarnAnimation}
            loop={true}
          />
        </L.LayoutBase>
      ) : (
        <div />
      )}
    </>
  );
};

export default Warn;
