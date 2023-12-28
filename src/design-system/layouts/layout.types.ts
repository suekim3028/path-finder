export type DefaultOrNumber = "default" | number;
export type Margin = {
  m?: DefaultOrNumber;
  mh?: DefaultOrNumber;
  mv?: DefaultOrNumber;
  mt?: DefaultOrNumber;
  mb?: DefaultOrNumber;
  ml?: DefaultOrNumber;
  mr?: DefaultOrNumber;
};
export type Padding = {
  p?: DefaultOrNumber;
  ph?: DefaultOrNumber;
  pv?: DefaultOrNumber;
  pt?: DefaultOrNumber;
  pb?: DefaultOrNumber;
  pl?: DefaultOrNumber;
  pr?: DefaultOrNumber;
};
export type Border = {
  rounded?: number;
  outline?: string;
};
export type BoxStyle = {
  z?: number;
  w?: string | number;
  h?: string | number;
} & Margin &
  Padding;

export type BgColor = {
  bgColor?: string;
};

type FlexType = "center" | "flex-start" | "flex-end";

export type Flex = {
  flex?: number;
  alignSelf?: FlexType;
  alignItems?: FlexType;
  justifyContent?: FlexType | "space-between" | "space-evenly";
  cursor?: "pointer" | "grab" | undefined;
};
