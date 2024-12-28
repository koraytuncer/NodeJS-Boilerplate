import Joi from 'joi';

const createValidation = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  phonenumber: Joi.string().allow(null).default(null),
  status: Joi.boolean().default(true),
  isactive: Joi.boolean().default(true),
});

const updateValidation = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  email: Joi.string().email(),
  phonenumber: Joi.string().allow(null).default(null),
  status: Joi.boolean().default(true),
  isactive: Joi.boolean().default(true),
});

export { createValidation,updateValidation };
