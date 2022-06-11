import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
  try {
    await fs.access(`${__dirname}/files`);
    const files = await fs.readdir(`${__dirname}/files`);
    console.log(files);
  } catch {
    throw Error('FS operation failed');
  }
};

list();
