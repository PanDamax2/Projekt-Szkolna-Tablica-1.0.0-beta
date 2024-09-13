import Joi from 'joi';

export const updateAnnouncementSchema = Joi.object({
    data: Joi.string().max(40).optional().messages({
        'string.base': 'Pole "data" musi być tekstem',
        'string.empty': 'Pole "data" nie może być puste',
        'string.max': 'Pole "data" może mieć maksymalnie 40 znaków'
    }),
    text: Joi.string().max(120).optional().messages({
        'string.base': 'Pole "text" musi być tekstem',
        'string.empty': 'Pole "text" nie może być puste',
        'string.max': 'Pole "text" może mieć maksymalnie 120 znaków'
    })
});