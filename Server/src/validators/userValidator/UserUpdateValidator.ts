import Joi from 'joi';

export const userUpdateValidator = Joi.object({
    name: Joi.string().min(2).max(30).optional().messages({
        'string.base': 'Imię powinno być tekstem',
        'string.empty': 'Imię nie może być puste',
        'string.min': 'Imię powinno mieć co najmniej 2 znaki',
        'string.max': 'Imię może mieć maksymalnie 30 znaków'
    }),
    lastname: Joi.string().min(2).max(30).optional().messages({
        'string.base': 'Nazwisko powinno być tekstem',
        'string.empty': 'Nazwisko nie może być puste',
        'string.min': 'Nazwisko powinno mieć co najmniej 2 znaki',
        'string.max': 'Nazwisko może mieć maksymalnie 30 znaków'
    }),
    email: Joi.string()
        .email()
        .max(50)
        .optional()
        .lowercase()
        .messages({
            'string.base': 'Email powinien być tekstem',
            'string.empty': 'Email nie może być pusty',
            'string.email': 'Nieprawidłowy email',
            'string.max': 'Email może mieć maksymalnie 50 znaków'
        }),
    login: Joi.string()
        .min(3)
        .max(20)
        .optional()
        .messages({
            'string.base': 'Login powinien być tekstem',
            'string.empty': 'Login nie może być pusty',
            'string.min': 'Login powinien mieć co najmniej 3 znaki',
            'string.max': 'Login może mieć maksymalnie 20 znaków',
        }),
    password: Joi.string().min(6).max(100).optional().messages({
        'string.base': 'Hasło powinno być tekstem',
        'string.empty': 'Hasło nie może być puste',
        'string.min': 'Hasło powinno mieć co najmniej 6 znaków',
        'string.max': 'Hasło może mieć maksymalnie 100 znaków'
    }),
    avatar: Joi.string().optional().allow(null, ''),
    isAdmin: Joi.boolean().optional().messages({
        'boolean.base': 'Czy użytkownik jest administratorem powinno być typu logicznego'
    })
});
