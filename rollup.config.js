import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './easy-storage.js',
    format: 'umd',
    name: 'EasyStorage',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};