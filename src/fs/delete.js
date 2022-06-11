import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
  try {
    await fs.access(`${__dirname}/files/fileToRemove.txt`);
    fs.unlink(`${__dirname}/files/fileToRemove.txt`);
  } catch {
    throw Error('FS operation failed');
  }
};
remove();
