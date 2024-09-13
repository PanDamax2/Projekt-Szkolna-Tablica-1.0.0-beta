import Joi from 'joi';

const nonEmptyString = Joi.string().max(32).required().messages({
  'string.base': 'Pole {#label} musi być tekstem',
  'string.empty': 'Pole {#label} nie może być puste',
  'any.required': 'Pole {#label} jest wymagane',
  'string.max': 'Pole {#label} nie może przekraczaæ {#limit} znaków'
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
