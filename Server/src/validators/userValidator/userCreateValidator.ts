import Joi from 'joi';

export const userCreateValidator = Joi.object({
    name: Joi.string().min(2).max(30).required().messages({
        'string.base': 'Imię powinno być tekstem',
        'string.empty': 'Imię nie może być puste',
        'string.min': 'Imię powinno mieć co najmniej 2 znaki',
        'string.max': 'Imię może mieć maksymalnie 30 znaków',
        'any.required': 'Imię jest polem obowiązkowym'
    }),

    lastname: Joi.string().min(2).max(30).required().messages({
        'string.base': 'Nazwisko powinno być tekstem',
        'string.empty': 'Nazwisko nie może być puste',
        'string.min': 'Nazwisko powinno mieć co najmniej 2 znaki',
        'string.max': 'Nazwisko może mieć maksymalnie 30 znaków',
        'any.required': 'Nazwisko jest polem obowiązkowym'
    }),

    email: Joi.string()
        .email()
        .max(50)
        .required()
        .lowercase()
        .messages({
            'string.base': 'Email powinien być tekstem',
            'string.empty': 'Email nie może być pusty',
            'string.max': 'Email może mieć maksymalnie 50 znaków',
            'string.domain': 'Domena email nie jest dozwolona',
            'any.required': 'Email jest polem obowiązkowym',
            'string.unique': 'Email jest już zajęty',
            'string.email': 'Nieprawidłowy email'
        }),

    login: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            'string.base': 'Login powinien być tekstem',
            'string.empty': 'Login nie może być pusty',
            'string.min': 'Login powinien mieć co najmniej 3 znaki',
            'string.max': 'Login może mieć maksymalnie 20 znaków',
            'any.required': 'Login jest polem obowiązkowym'
        }),

    password: Joi.string().min(6).max(100).required().messages({
        'string.base': 'Hasło powinno być tekstem',
        'string.empty': 'Hasło nie może być puste',
        'string.min': 'Hasło powinno mieć co najmniej 6 znaków',
        'string.max': 'Hasło może mieć maksymalnie 100 znaków',
        'any.required': 'Hasło jest polem obowiązkowym'
    }),

    avatar: Joi.string().allow(null, ''),

    isAdmin: Joi.boolean().required().messages({
        'boolean.base': 'Czy użytkownik jest administratorem powinno być typu logicznego',
        'any.required': 'Czy użytkownik jest administratorem jest polem obowiązkowym'
    })
});
