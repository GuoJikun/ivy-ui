const svgoPlugins = [
  {
    name: 'convertColors',
    params: { currentColor: /^(?!url|none)./ },
  },
  {
    name: 'cleanupListOfValues',
    active: true,
  },
  {
    name: 'removeStyleElement',
    active: true,
  },
  {
    name: 'removeViewBox',
    active: false,
  },
  {
    name: 'removeDimensions',
    active: true,
  },
];

export default svgoPlugins;
