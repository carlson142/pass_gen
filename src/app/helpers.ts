// NOTE: Shuffle an array
export const shuffle = (arr: string[]): string[] => {
  let m = arr.length,
    t,
    i;

  while (m) {
    let i = Math.floor(Math.random() * m--);
    (t = arr[m]), (arr[m] = arr[i]), (arr[i] = t);
  }

  return arr;
};
