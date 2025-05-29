//custom method to ensure the validation of the user token
import Joi from 'joi';
// This schema is used to validate user registration data(the name, email, and password)
export const registerSchema = Joi.object({
    //insde the object we have the properties(varaibles) that we want to validate
    //max number of character should be like the max in the database(to avoid errors between the database and the validation)
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'))
    .message('Password must contain at least one uppercase, one lowercase, one number and one special character')
    .required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
    .required()
    .invalid(Joi.ref('currentPassword')) // Alternative to disallow(new password same as current password)
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase, one lowercase, one number and one special character',
      'any.invalid': 'New password cannot be the same as current password'
    })//message can be an object or a string
    // if the error is in the pattern, it will return the message(first message)
    //if the error is in the invalid, it will return the message(second message)

});