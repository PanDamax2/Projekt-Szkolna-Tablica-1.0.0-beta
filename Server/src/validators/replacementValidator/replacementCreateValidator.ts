import Joi from 'joi';

const nonEmptyString = Joi.required().messages({
  'any.required': 'Pole {#label} jest wymagane'
});

export const createReplacementSchema = Joi.object({
  lesson: nonEmptyString.label('lesson'),
  teacher: nonEmptyString.label('teacher'),
  branch: nonEmptyString.label('branch'),
  subject: nonEmptyString.label('subject'),
  room: nonEmptyString.label('room'),
  date: nonEmptyString.label('date'),
  deputy: nonEmptyString.label('deputy')
});
