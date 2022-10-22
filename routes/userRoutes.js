const userRouter = require('express').Router();
const { updateUserValidation } = require('../middlewares/validation');
const {
  getUser,
  updateUser,
} = require('../controllers/users');

userRouter.get('/users/me', getUser);
userRouter.patch('/users/me', updateUserValidation, updateUser);

module.exports = userRouter;
