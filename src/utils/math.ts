type valueProps = {
  matrix: number[][];
}

export const findMaxIndex = ({ matrix }: valueProps) => {
  let max = -1;
  let maxIndices: [number, number] = [0, 0];

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value > max) {
        max = value;
        maxIndices = [i, j];
      }
    });
  });

  return [...maxIndices];
}