import { DIMENSIONS } from "@/constants";
import styled, { css } from "styled-components";
// import { BgColor, Border, BoxStyle, Grid } from "./layout.types";
// import { getStyle, toMarginPaddingString } from "./layout.utils";

// export const GridBase = styled.div<BgColor & Grid & BoxStyle & Border>`
//   ${({
//   theme,
//   p,
//   ph,
//   pv,
//   pt,
//   pr,
//   pb,
//   pl,
//   m,
//   mh,
//   mv,
//   mt,
//   mr,
//   mb,
//   ml,
//   w,
//   h,
//   grid,
//   gridTemplateColumns = 4,
//   gridTemplateRows = 8,
//   rounded,
//   z,
//   outline,
//   bgColor = "TRANSPARENT",
// }) => css`
//     ${getStyle("padding", toMarginPaddingString(p, ph, pv, pt, pr, pb, pl))}
//     ${getStyle("margin", toMarginPaddingString(m, mh, mv, mt, mr, mb, ml))}
//     ${getStyle("width", w)}
//     ${getStyle("height", h)}
//     ${getStyle("grid", grid)}
//     ${getStyle("border-radius", rounded)}
//     ${getStyle(
//   "border-color",
//   outline && outline in theme ? theme[outline] : outline
// )}
//     ${getStyle("z-index", z)}
//     ${typeof rounded === "number" ? "overflow: hidden;" : ""}
//     ${typeof outline === "string"
//     ? "border-width: 1px; border-style: solid;"
//     : ""}
//     display: grid; 
//     grid-template-columns: repeat(4, 1fr);
//     grid-template-rows: repeat(8, 1fr); 
//     background-color: ${bgColor && bgColor in theme ? theme[bgColor] : bgColor};
//   `}
// `;

type Grid = {
  cols?: number;
  rows?: number;
  gap?: number;
}

export const Grid = styled.div<Grid>(
  ({ cols, rows, gap }) => `
  width: ${DIMENSIONS.SCREEN_WIDTH}px;
  height: ${DIMENSIONS.SCREEN_WIDTH}px;
  position: absolute;
  top:0;
  left:0;
  display: grid;
  grid-template-columns: repeat(${cols || '4'}, 1fr);
  grid-template-rows: repeat(${rows || '8'}, 1fr);
  grid-gap: ${gap || 0};
`
);
