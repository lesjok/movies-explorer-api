const userRouter = require('express').Router();
const { updateUserValidation } = require('../middlewares/validation');
const {
  getUser,
  updateUser,
} = require('../controllers/users');

userRouter.get('/me', getUser);
userRouter.patch('/me', updateUserValidation, updateUser);

module.exports = userRouter;
