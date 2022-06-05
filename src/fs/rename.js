import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
  try {
    await fs.access(`${__dirname}/files/wrongFilename.txt`);
    fs.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`);
  } catch {
    throw Error('FS operation failed');
  }
};
rename();
