export function reverse(x: number): number {
  x = +Math.abs(x).toString().split('').reverse().join('') * Math.sign(x);

  return Math.abs(x) >= Math.pow(2, 31) ? 0 : x;
}