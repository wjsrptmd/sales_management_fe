const crypto = require('crypto');

const createSalt = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString('base64'));
    });
  });

const createHashedPassword = (plainPassword, originSalt) =>
  new Promise(async (resolve, reject) => {
    const salt = originSalt || (await createSalt());
    crypto.pbkdf2(plainPassword, salt, 123, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });

module.exports = {
  createHashedPassword,
};
