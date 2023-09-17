export const colorAlpha = (hexCode: string, alphaPercent: number) => {
  // let hex = hexCode.replace('#', '');

  // if (hex.length === 3) {
  //   hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  // }

  // const r = parseInt(hex.substring(0, 2), 16);
  // const g = parseInt(hex.substring(2, 4), 16);
  // const b = parseInt(hex.substring(4, 6), 16);

  // return `rgba(${r},${g},${b},${alphaPercent / 100})`;

  const _opacity = Math.round(
    Math.min(Math.max(alphaPercent || 1, 0), 1) * 255,
  );
  return hexCode + _opacity.toString(16).toUpperCase();
};
