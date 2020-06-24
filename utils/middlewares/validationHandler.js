const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const pick = require('../pick');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    res.status(400).send(Boom.badRequest(errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
