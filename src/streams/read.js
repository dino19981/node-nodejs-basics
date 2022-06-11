import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const readableStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`, 'utf-8');
  readableStream.on('data', (chunk) => process.stdout.write(chunk));
};
read();
