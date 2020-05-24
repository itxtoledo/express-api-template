import Joi from "@hapi/joi";

export const registerSchema = Joi.object({
  name: Joi.string().max(256).required(),
  email: Joi.string().email().required(),
  password: Joi.string().max(256).required(),
}).options({ stripUnknown: true });

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(256).required(),
}).options({ stripUnknown: true });

export const lostPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
}).options({ stripUnknown: true });

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  token: Joi.string().max(32).required(),
}).options({ stripUnknown: true });
