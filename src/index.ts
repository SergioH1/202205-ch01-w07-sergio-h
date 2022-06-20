// import fs from 'fs';
// import fs from 'fs/promises';
import http from 'http';

import url from 'url';
import { findNumbers } from './calculator.js';

const PORT = process.env.PORT || 4000;

export const server = http.createServer(async (req, res) => {
    const path = url.parse(req.url as string).path;
    let numbers: Array<number> = findNumbers(path as string);
    let template = `Resultado
    ${numbers[0]}+${numbers[1]}=${numbers[0] + numbers[1]}
    ${numbers[0]}-${numbers[1]}=${numbers[0] - numbers[1]}
    ${numbers[0]}*${numbers[1]}=${numbers[0] * numbers[1]}
    ${numbers[0]}/${numbers[1]}=${numbers[0] / numbers[1]}`;
    res.end(template);
});

server.listen(PORT);
