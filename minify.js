const {readFileSync, writeFileSync} = require('fs');
const {sync: glob} = require('glob');
const {minify} = require('html-minifier');


glob(`public/**/*.html`)
    .forEach(file => {
        const html = readFileSync(file, 'utf8');
        const minified = minify(html, {});
        const gain = html.length - minified.length;
        if (gain > 0) {
            const percent = (gain / html.length) * 100;
            console.info(file, 'gain', percent.toFixed(2), '%');
            writeFileSync(file, minified, {flag: 'w'});
        }
    });