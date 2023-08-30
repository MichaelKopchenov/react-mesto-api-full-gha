const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlValidator = require('../utils/constants');
const {
  getUsers,
  getUserById,
  editDataOfUser,
  editDataOfUserAvatar,
  dataOfUser,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', dataOfUser);

router.get('/:userId', celebrate({
  params: Joi
    .object()
    .keys({
      userId: Joi
        .string()
        .length(24)
        .hex()
        .required(),
    }),
}), getUserById);

router.patch('/me', celebrate({
  body: Joi
    .object()
    .keys({
      name: Joi
        .string()
        .min(2)
        .max(30)
        .required(),
      about: Joi
        .string()
        .min(2)
        .max(30)
        .required(),
    }),
}), editDataOfUser);

router.patch('/me/avatar', celebrate({
  body: Joi
    .object()
    .keys({
      avatar: Joi
        .string()
        .pattern(urlValidator)
        .required(),
    }),
}), editDataOfUserAvatar);

module.exports = router;
