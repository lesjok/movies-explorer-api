const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signUpValidation, signInValidation } = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const routerUsers = require('./userRoutes');
const routerMovies = require('./movieRoutes');

router.post('/signup', signUpValidation, createUser);
router.post('/signin', signInValidation, login);

router.use('/users', auth, routerUsers);
router.use('/movies', auth, routerMovies);

module.exports = router;
