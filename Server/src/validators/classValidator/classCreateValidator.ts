import Joi from 'joi';

export const createClassroomsSchema = Joi.object({
    title: Joi.string().max(30).required().messages({
        'string.base': 'Pole title musi być tekstem',
        'string.empty': 'Pole title nie może być puste',
        'string.max': 'Pole title może mieć maksymalnie 30 znaków',
        'any.required': 'Pole title jest wymagane'
    }),
    html: Joi.string().required().messages({
        'string.base': 'Pole html musi być tekstem',
        'string.empty': 'Pole html nie może być puste',
        // 'string.max': 'Pole text może mieć maksymalnie 120 znaków',
        'any.required': 'Pole html jest wymagane'
    })
});
