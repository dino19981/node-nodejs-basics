import { fileURLToPath } from 'url';
import { constants } from 'node:fs';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalFolder = `${__dirname}/files`;
const copyFolderPath = `${__dirname}/files_copy`;

export const copy = async () => {
  try {
    await fs.access(originalFolder, constants.R_OK);
  } catch (err) {
    throw Error('FS operation failed');
  }

  try {
    await fs.mkdir(copyFolderPath);
    const files = await fs.readdir(originalFolder);

    files.forEach((file) => {
      fs.copyFile(`${originalFolder}/${file}`, `${copyFolderPath}/${file}`);
    });
  } catch {
    throw Error('FS operation failed');
  }
};

copy();
