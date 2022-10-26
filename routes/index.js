const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signUpValidation, signInValidation } = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const routerUsers = require('./userRoutes');
const routerMovies = require('./movieRoutes');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', signUpValidation, createUser);
router.post('/signin', signInValidation, login);

router.use(auth);

router.use('/users', routerUsers);
router.use('/movies', routerMovies);

router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена.'));
});
module.exports = router;
