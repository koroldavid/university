import { readFile } from "fs";
import { isEmpty } from "lodash";
import { to64BitArray } from "./utils";
import { encryptWithDES } from "./des";

const inputFilepath = process.argv[2];
const key = process.argv[3];

if (isEmpty(inputFilepath)) {
  throw new Error("No file to convert is provided");
}

if (key.length !== 8) {
  throw new Error("Key should be 8 bytes long");
}

readFile(inputFilepath, 'utf8', (error, data) => {
  if (error) {
    throw error
  }

  const startTime = Date.now();
  console.info(`Start processing ${data.length} bytes at ${startTime}`);

  const bitsKey = to64BitArray(key)[0];
  to64BitArray(data).map(chunk => encryptWithDES(chunk, bitsKey))

  const endTime = Date.now();
  console.info(`Finish processing at ${endTime}`,);
  console.info(`Spend ${endTime - startTime}`);
});