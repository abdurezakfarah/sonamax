export function ceilToNearestTen(num: number) {
  return num % 10 < 5
    ? Math.floor(num / 10) * 10
    : Math.ceil(num / 10) * 10 - 10;
}
