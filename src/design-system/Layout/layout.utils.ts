export const toMarginPaddingString = (
  ...[all = 0, h = 0, v = 0, t = 0, r = 0, b = 0, l = 0]: (number | undefined)[]
) => {
  const top = t || v || all;
  const right = r || h || all;
  const bottom = b || v || all;
  const left = l || h || all;
  return `${top}px ${right}px ${bottom}px ${left}px;`;
};

export const getStyle = (key: string, value: number | undefined | string) => {
  if (value === undefined) return '';
  if (key === 'z-index' || key === 'opacity') return `${key}: ${value};`;
  if (typeof value === 'number') return `${key}: ${value}px;`;
  return `${key}: ${value};`;
};
