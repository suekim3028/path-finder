import styled, { css } from "styled-components";
import { BgColor, Flex } from "./layout.types";
import { LayoutBase } from "./Flex";
import { getStyle } from "./layout.utils";
import { DIMENSIONS } from "@/constants";

export const AbsoluteFill = styled.div<BgColor>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme, bgColor }) =>
    bgColor && bgColor in theme ? theme[bgColor] : bgColor};
`;

export const AbsoluteFullScreen = styled.div<BgColor & Flex>`
  width: ${DIMENSIONS.SCREEN_WIDTH}px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme, bgColor }) => theme[bgColor || "TRANSPARENT"]};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;

type AbsoluteStyle = {
  flexDirection?: "row" | "column";
  b?: number | string;
  t?: number | string;
  l?: number | string;
  r?: number | string;
};

export const Absolute = styled(LayoutBase)<AbsoluteStyle>`
  position: absolute;
  ${({ b, t, l, r, flexDirection }) => css`
    ${getStyle("flex-direction", flexDirection || "row")}
    ${getStyle("bottom", b)}
    ${getStyle("top", t)}
    ${getStyle("left", l)}
    ${getStyle("right", r)}
  `}
`;

export const Fixed = styled(LayoutBase)<AbsoluteStyle>`
  position: fixed;
  ${({ b, t, l, r, flexDirection }) => css`
    ${getStyle("flex-direction", flexDirection || "row")}
    ${getStyle("bottom", b)}
    ${getStyle("top", t)}
    ${getStyle("left", l)}
    ${getStyle("right", r)}
  `}
`;
