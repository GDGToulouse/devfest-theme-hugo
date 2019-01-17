import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const globals = {firebase: 'firebase'};

export default {
    input: 'src/script/main.js',
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
    ]
}