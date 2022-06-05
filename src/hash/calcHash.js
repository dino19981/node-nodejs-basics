import { fileURLToPath } from 'url';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
  const fileData = await fs.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`);
  const hexFileData = crypto.createHash('sha256').update(fileData).digest('hex');
  console.log(hexFileData);
};
calculateHash();
