const colors = [
  '#00a676',
  '#086788',
  '#f0c808',
  '#dd1c1a',
  '#730071',
  '#7698b3',
  '#dc9596',
  '#e9d985',
  '#749c75',
  '#613dc1',
  '#fff1d0',
];

const getColor = id => {
  const length = colors.length;
  if (id >= length) {
    id = id % length;
  }

  return colors[id];
};

export default getColor;
