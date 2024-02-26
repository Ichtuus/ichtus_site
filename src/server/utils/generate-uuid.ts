import { customAlphabet } from "nanoid";
import nanoidDictionary from "nanoid-dictionary";

export function generateUUID(length: number) {
  const generateUUID = customAlphabet(nanoidDictionary.numbers, length);
  return generateUUID();
}
