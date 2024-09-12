import Joi from 'joi';

export const resetPasswordValidator = Joi.object({
    password: Joi.string()
        .min(6)
        .max(100)
        .required()
        .messages({
            'string.base': 'Hasło powinno być tekstem',
            'string.empty': 'Hasło nie może być puste',
            'string.min': 'Hasło powinno mieć co najmniej 6 znaków',
            'string.max': 'Hasło nie może mieć więcej niż 100 znaków',
            'any.required': 'Hasło jest wymagane',
        }),
});
