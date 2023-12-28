export type Margin = {
  m?: number;
  mh?: number;
  mv?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};
export type Padding = {
  p?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
};
export type Border = {
  rounded?: number;
  outline?: string;
};
export type BoxStyle = {
  z?: number;
  w?: string | number;
  h?: string | number;
  gap?: number;
} & Margin &
  Padding;

export type BgColor = {
  bgColor?: string;
};

type FlexType = 'center' | 'flex-start' | 'flex-end';

export type Flex = {
  flex?: number;
  alignSelf?: FlexType;
  alignItems?: FlexType;
  justifyContent?: FlexType | 'space-between' | 'space-evenly';
  opacity?: number;
};
