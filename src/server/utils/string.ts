import bcrypt from "bcrypt";

export async function compareStrings(
  plainString: string,
  encryptedString: string
) {
  return await bcrypt.compare(plainString, encryptedString);
}

export async function hashStrings(data: string): Promise<string> {
  const hash = await bcrypt.hash(data, 12);
  return hash;
}
