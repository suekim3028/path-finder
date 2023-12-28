const calculatePos = (data) => {
  const pos = [];
  for (const [x, y] of data) {
    pos.push([x, y]);
  }
  return pos;
};
