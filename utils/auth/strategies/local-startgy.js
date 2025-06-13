import { Strategy } from 'passport-local';
import UserService from '../../../services/user.service.js';
const boom = require('boom');

const userService = new UserService();
const LocalStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await userService.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;

