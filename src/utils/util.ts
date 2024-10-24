export const random = Math.floor(Math.random() * 10000);

export const isColorLight = (color: string): boolean => {
  const r = parseInt(color?.substring(1, 2), 16);
  const g = parseInt(color?.substring(3, 2), 16);
  const b = parseInt(color?.substring(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};
