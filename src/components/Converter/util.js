const hexToRgb = (hex) => {
  let r = parseInt(hex[1] + hex[2], 16);
  let g = parseInt(hex[3] + hex[4], 16);
  let b = parseInt(hex[5] + hex[6], 16);
  return isNaN(r) || isNaN(g) || isNaN(b) ? 'Ошибка!' : `rgb(${r}, ${g}, ${b})`;
};

export default hexToRgb;
