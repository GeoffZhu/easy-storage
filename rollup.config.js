import babel from 'rollup-plugin-babel';

const config = {
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

if (process.env.TARGET_ENV === 'vue') {
  config.input = './src/vue.js'
  config.output.file = './vue.js'
}

export default config