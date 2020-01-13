import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const {Logger, LogLevel, colorEmojiConfig} = require('plop-logger');

Logger.config = colorEmojiConfig;
const logger = Logger.getLogger('icons');
logger.level = LogLevel.All;

const globals = {firebase: 'firebase'};

export default {
  input: 'src/scripts/main.js',
  output: [
    {file: 'static/theme.js', format: 'esm', globals}
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: [
    'firebase',
    'firebase/firestore'
  ],
  onwarn(warning) {
    logger.warn(warning.message, warning);
  }
}
