const parseColors = (colors, polygons) => {
  return Array.apply(null, {length: polygons}).map((a, i) => (colors[i] || colors[0]) || 'transparent');
};

const cube = (x, y, z, s, ...c) => {
  return rectPrism(x, y, z, s, s, s, ...c);
};

const polygon = (c, ...vertices) => {
  return [[c, ...vertices]];
};

const rectPrism = (x, y, z, dx, dy, dz, ...c) => {
  const c1 = parseColors(c, 6);
  return [
    ...xzRect(x, y, z, dx, dz, c1[0]),
    ...xyRect(x, y, z, dx, dy, c1[1]),
    ...yzRect(x, y, z, dy, dz, c1[2]),
    ...xyRect(x, y, z + dz, dx, dy, c1[3]),
    ...yzRect(x + dx, y, z, dy, dz, c1[4]),
    ...xzRect(x, y + dy, z, dx, dz, c1[5])
  ];
};

const xyRect = (x, y, z, dx, dy, c) => {
  return [
    [c, [x, y, z], [x + dx, y, z], [x + dx, y + dy, z], [x, y + dy, z]]
  ];
};

const xzRect = (x, y, z, dx, dz, c) => {
  return [
    [c, [x, y, z], [x + dx, y, z], [x + dx, y, z + dz], [x, y, z + dz]]
  ];
};

/* TODO
const xzRectPyramid = (x, y, z, dx, dy, dz, ...c) => {
  const c1 = parseColors(c, 5);
  return [
    ...xzRect(x, y, z, dx, dz, c1[0]),
    [c1[1], [x, y, z], []]
  ];
};
*/

const yzRect = (x, y, z, dy, dz, c) => {
  return [
    [c, [x, y, z], [x, y + dy, z], [x, y + dy, z + dz], [x, y, z + dz]]
  ];
};

export default {
  cube,
  polygon,
  rectPrism,
  xyRect,
  xzRect,
  yzRect
};