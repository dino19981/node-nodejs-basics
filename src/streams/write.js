import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  const writableStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`, 'utf-8');
  const text = process.stdin.on('data', (data) => writableStream.write(data));
};
write();
