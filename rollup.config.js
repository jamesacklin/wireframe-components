import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
// import { uglify } from "rollup-plugin-uglify";
// const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

import packageJSON from './package.json';

const input = './src/index.js';

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve({
        // This will force a build with no external dependencies, probably not good?
        // customResolveOptions: {
        //   moduleDirectory: 'src'
        // }
      }),
      external(),
      commonjs({
        include: 'node_modules/**',
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        namedExports: {
          'node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement',
          ],
          'node_modules/react-dom/index.js': ['render', 'hydrate'],
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
          ],
        },
      }),
    ],
  },
];
