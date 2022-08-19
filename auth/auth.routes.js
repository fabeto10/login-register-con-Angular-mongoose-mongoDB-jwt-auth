const Users = require('./auth.controller');
module.exports = () => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}