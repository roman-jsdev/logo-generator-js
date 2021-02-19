import ColorScheme from "color-scheme";

export const generateColors = (hue, index) => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (hue.length == 4) {
    r = "0x" + hue[1] + hue[1];
    g = "0x" + hue[2] + hue[2];
    b = "0x" + hue[3] + hue[3];
  } else if (hue.length == 7) {
    r = "0x" + hue[1] + hue[2];
    g = "0x" + hue[3] + hue[4];
    b = "0x" + hue[5] + hue[6];
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const cMin = Math.min(r, g, b);
  const cMax = Math.max(r, g, b);
  const delta = cMax - cMin;

  let h = 0;

  if (delta == 0) {
    h = 0;
  } else if (cMax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cMax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const scheme = new ColorScheme();
  scheme.from_hue(h).distance(0.1).scheme("analogic").variation("default");
  const colors = scheme.colors();
  return colors[index];
};

export const getContrast = (hexColor, styleDark, styleBright) => {
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? styleDark : styleBright;
};
