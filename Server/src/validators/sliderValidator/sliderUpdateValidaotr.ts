import Joi from 'joi';

export const updateSliderSchema = Joi.object({
    file: Joi.object({
        fieldname: Joi.string().required(),
        originalname: Joi.string().required(),
        encoding: Joi.string().required(),
        mimetype: Joi.string().required(),
        destination: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number()
            .max(5 * 1024 * 1024)
            .required()
            .messages({
                'number.max': 'Plik nie może być większy niż 5MB',
                'number.base': 'Pole size musi być liczbą'
            })
    })
        .optional()
        .messages({
            'object.base': 'Nieprawidłowy format pliku'
        })
});
