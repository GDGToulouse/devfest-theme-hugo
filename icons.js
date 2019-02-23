const {readFileSync, writeFileSync} = require('fs');
const {sync: glob} = require('glob');

const data = glob(`src/icons/*.svg`)
    .map(file => {
            const parts = file.split('/');
            const id = parts[parts.length - 1].split('.')[0];
            return readFileSync(file, 'utf8')
                .replace(`<svg xmlns="http://www.w3.org/2000/svg"`, `\t<symbol id="${id}"`)
                .replace(`</svg>`, `\t</symbol>`);
        }
    );


const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" class="visually-hidden">
  ${data.join('\n')}
</svg>`;

const file = 'static/icons.svg';
console.info('Generate ', file);
writeFileSync(file, svg, {flag: 'w'});