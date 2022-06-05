import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  try {
    await fs.access(`${__dirname}/files/fileToRead.txt`);
    const fileData = await fs.readFile(`${__dirname}/files/fileToRead.txt`, 'utf8');
    console.log(fileData);
  } catch {
    throw Error('FS operation failed');
  }
};
read();
