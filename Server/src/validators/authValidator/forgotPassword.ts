import Joi from 'joi';

export const forgotPasswordValidator = Joi.object({
    email: Joi.string().email().max(50).required().lowercase().messages({
        'string.base': 'Email powinien być tekstem',
        'string.empty': 'Email nie może być pusty',
        'string.max': 'Email może mieć maksymalnie 50 znaków',
        'string.domain': 'Domena email nie jest dozwolona',
        'any.required': 'Email jest polem obowiązkowym',
        'string.unique': 'Email jest już zajęty',
        'string.email': 'Nieprawidłowy email'
    })
});
