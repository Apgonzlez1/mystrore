const { Strategy } = require('passport-local'); // mejor usar desestructuración
const UserService = require('../../../services/user.service.js');
const boom = require('@hapi/boom'); // usa @hapi/boom, más actual
const bcrypt = require('bcrypt');

const userService = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await userService.findByEmail(email);
      if (!user) {
        return done(boom.unauthorized('User not found'), false);
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(boom.unauthorized('Wrong password'), false);
      }

      delete user.dataValues.password; // elimina el password para no exponerlo

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
);

module.exports = LocalStrategy;
