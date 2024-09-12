import Joi from 'joi';

export const verifyEmailValidator = Joi.object({
    code: Joi.string()
        .max(6)
        .required()
        .messages({
            'string.base': 'Kod weryfikacyjny powinien być tekstem',
            'string.empty': 'Kod weryfikacyjny nie może być pusty',
            'string.max': 'Kod weryfikacyjny nie może mieć więcej niż 6 znaków',
            'any.required': 'Kod weryfikacyjny jest polem obowiązkowym'
        }),
});
