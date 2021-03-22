// configure jest to work with babel
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
