const passport = require('passport');
// ✅ Correcto
const LocalStrategy = require('./strategies/local.strategy');


passport.use('local', LocalStrategy); // ✅ Registra como 'local'
