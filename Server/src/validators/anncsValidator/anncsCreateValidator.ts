import Joi from 'joi';

export const createAnnouncementSchema = Joi.object({
    data: Joi.string().max(40).required().messages({
        'string.base': 'Pole data musi być tekstem',
        'string.empty': 'Pole data nie może być puste',
        'string.max': 'Pole data może mieć maksymalnie 40 znaków',
        'any.required': 'Pole data jest wymagane'
    }),
    text: Joi.string().max(120).required().messages({
        'string.base': 'Pole text musi być tekstem',
        'string.empty': 'Pole tex nie może być puste',
        'string.max': 'Pole text może mieć maksymalnie 120 znaków',
        'any.required': 'Pole text jest wymagane'
    })
});
