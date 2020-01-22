const colors = require('.');

const { createWriteStream } = require('fs');
const { resolve } = require('path');


const TARGET = resolve('dist', 'index.scss');

let colorsMap = new Map(Object.entries(colors));

const writeStream = createWriteStream(TARGET, {
    encoding: 'utf8',
});
colorsMap.forEach((colorValue, colorName) => {
    writeStream.write(`$${colorName}: ${colorValue};\n`)
});

writeStream.end();