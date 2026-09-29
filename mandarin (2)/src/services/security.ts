/**
 * Strong Cryptography & Encryption Service
 * Implements PBKDF2/SHA-256 for password hashing and AES-GCM (256-bit)
 * for sensitive profile data encryption and cryptographic audit signing.
 */

// Generate random salt in hex
export function generateSalt(length = 16): string {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Convert string to ArrayBuffer
function str2ab(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// Convert ArrayBuffer to hex string
function ab2hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');
}

// Convert hex string to Uint8Array
function hex2ab(hex: string): Uint8Array {
  const typedArray = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    typedArray[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return typedArray;
}

/**
 * Strong Password Hash using PBKDF2 with SHA-256 and 100,000 iterations
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey']
  );

  const derivedKey = await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: enc.encode(salt),
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );

  const rawKey = await window.crypto.subtle.exportKey('raw', derivedKey);
  return ab2hex(rawKey);
}

/**
 * Derive an AES-GCM 256-bit key from user master secret
 */
async function getEncryptionKey(secret: string, salt: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return await window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: enc.encode(salt),
      iterations: 50000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypt sensitive text using AES-256-GCM
 */
export async function encryptData(plainText: string, secretKey: string, salt: string): Promise<{ cipherText: string; iv: string }> {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await getEncryptionKey(secretKey, salt);
  const encodedData = str2ab(plainText);

  const encryptedBuffer = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    key,
    encodedData as BufferSource
  );

  return {
    cipherText: ab2hex(encryptedBuffer),
    iv: ab2hex(iv.buffer)
  };
}

/**
 * Decrypt ciphertext using AES-256-GCM
 */
export async function decryptData(cipherHex: string, ivHex: string, secretKey: string, salt: string): Promise<string> {
  try {
    const key = await getEncryptionKey(secretKey, salt);
    const iv = hex2ab(ivHex);
    const cipherData = hex2ab(cipherHex);

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv as BufferSource
      },
      key,
      cipherData as BufferSource
    );

    return new TextDecoder().decode(decryptedBuffer);
  } catch (err) {
    console.error('Decryption failed:', err);
    return '[Dekripsi Gagal: Kunci tidak valid]';
  }
}

/**
 * Compute SHA-256 hash for activity audit integrity
 */
export async function computeHash(data: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(data);
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8);
  return ab2hex(hashBuffer);
}
