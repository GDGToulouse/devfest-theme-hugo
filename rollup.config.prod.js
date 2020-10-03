import {default as defaultConfig} from './rollup.config';
import { terser } from "rollup-plugin-terser";

export default {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        terser()
    ]
};
