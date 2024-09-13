import Joi from 'joi';

export const updateClassroomsSchema = Joi.object({
    title: Joi.string().max(30).optional().messages({
        'string.base': 'Pole title musi być tekstem',
        'string.empty': 'Pole title nie może być puste',
        'string.max': 'Pole title może mieć maksymalnie 30 znaków',
    }),
    html: Joi.string().optional().messages({
        'string.base': 'Pole html musi być tekstem',
        'string.empty': 'Pole html nie może być puste',
        // 'string.max': 'Pole text może mieć maksymalnie 120 znaków',
    })
});
