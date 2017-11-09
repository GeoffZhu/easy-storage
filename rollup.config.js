import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './index.js',
    format: 'umd',
    name: 'EasyStorage'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};