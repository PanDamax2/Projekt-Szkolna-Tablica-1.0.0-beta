import Joi from 'joi';

export const createSliderSchema = Joi.object({
    file: Joi.string()
        .valid('empty')
        .required()
        .messages({
            'any.only': 'Pole imgUrl może mieć tylko wartość empty',
            'string.empty': 'Pole imgUrl nie może być puste',
            'any.required': 'Pole imgUrl jest wymagane'
        })
});
