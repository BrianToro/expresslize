const Joi = require('@hapi/joi');

const message = {
  body: Joi.object().keys({
    message: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    priority: Joi.string().required().valid('low', 'normal', 'high'),
  }),
};

module.exports = { message };
