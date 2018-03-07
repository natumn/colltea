import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    babel({
      babelrc: false,
      presets: ["es2015-rollup"],
      plugins: [["transform-react-jsx", { pragma: "h" }]]
    }),
    resolve({
      jsnext: true
    }),
    uglify(),
    nodeResolve({ jsnext: true }),
    commonjs()
  ]
}
