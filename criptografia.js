require("dotenv-safe").config();

const crypto = require('crypto');
const CHAVE = process.env.CHAVE;
const IV = process.env.IV;
const ALGORITMO = process.env.ALGORITMO;
const METODO_CRIPTOGRAFIA = process.env.METODO_CRIPTOGRAFIA;
const METODO_DESCRIPTOGRAFIA = process.env.METODO_DESCRIPTOGRAFIA;

const encriptar = ((text) =>  {
  let cipher = crypto.createCipheriv(ALGORITMO, CHAVE, IV);
  let encrypted = cipher.update(text, 'utf8', METODO_CRIPTOGRAFIA);
  encrypted += cipher.final(METODO_CRIPTOGRAFIA);
  return encrypted;
});

const descriptar = ((text) => {
    let decipher = crypto.createDecipheriv(ALGORITMO, CHAVE, IV);
    let decrypted = decipher.update(text, METODO_DESCRIPTOGRAFIA, 'utf8');
    return (decrypted + decipher.final('utf8'));
 });

const encriptada_key = encriptar("HelloWord");
console.log (encriptada_key);
const descriptada_key = descriptar("encriptada_key");
console.log(descriptada_key);
 module.exports = {encriptar, descriptar};