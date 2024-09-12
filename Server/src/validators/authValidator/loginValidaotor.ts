import Joi from 'joi';

export const loginValidator = Joi.object({
    login: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'Login powinien być tekstem',
            'string.empty': 'Login nie może być pusty',
            'string.min': 'Login powinien mieć co najmniej 3 znaki',
            'string.max': 'Login nie może mieć więcej niż 50 znaków',
            'any.required': 'Login jest polem obowiązkowym'
        }),
    password: Joi.string()
        .min(6)
        .max(100)
        .required()
        .messages({
            'string.base': 'Hasło powinno być tekstem',
            'string.empty': 'Hasło nie może być puste',
            'string.min': 'Hasło powinno mieć co najmniej 6 znaków',
            'string.max': 'Hasło nie może mieć więcej niż 100 znaków',
            'any.required': 'Hasło jest polem obowiązkowym'
        })
});
