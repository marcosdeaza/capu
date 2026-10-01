#!/usr/bin/env node
// node terminal/demo.js   (Capu in your terminal: half-block portrait and a short animation)
const { playCapu, capuBeside } = require('./capu-terminal');
if (process.argv.includes('--static')) console.log(capuBeside(['Capu', 'la mascota de Deiza Code']));
else playCapu();
