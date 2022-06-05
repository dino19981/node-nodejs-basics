import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = `${__dirname}/files/${fileName}`;
  const fileData = 'I am fresh and young';

  fs.access(filePath, (err) => {
    if (err) {
      fs.writeFile(filePath, fileData, (err) => {
        if (err) throw Error;
      });
    } else {
      throw Error('FS operation failed');
    }
  });
};
create();
