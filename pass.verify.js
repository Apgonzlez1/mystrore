const bcrypt = require('bcrypt');

const myPassword = 'admin123';
const hash = '$2b$10$GA/JI13CeAok9wsHmTAuSOQTRGcIJSJ30X9eqhX1OeLu1mkrqg5Xe';

async function verifyPassword() {
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
