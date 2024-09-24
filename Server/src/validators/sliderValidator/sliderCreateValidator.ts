import Joi from 'joi';

export const createSliderSchema = Joi.object({
    file: Joi.string()
        .valid('empty')
        .required()
        .messages({
            'any.only': 'Pole file może mieć tylko wartość empty',
            'string.empty': 'Pole file nie może być puste',
            'any.required': 'Pole file jest wymagane'
        })
});
