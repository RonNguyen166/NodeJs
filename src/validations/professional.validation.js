const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createProfessional = {
  body: Joi.object().keys({
    people: Joi.string().required(),
    worksFor: Joi.string().required(),
    degree: Joi.string().required(),
    experience: Joi.number().required(),
  }),
};

const getProfessionals = {
  query: Joi.object().keys({
    degree: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProfessional = {
  params: Joi.object().keys({
    professionalId: Joi.string().custom(objectId),
  }),
};

const updateProfessional = {
  params: Joi.object().keys({
    professionalId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        people: Joi.string(),
        degree: Joi.string(),
        experience: Joi.number(),
        worksFor: Joi.string()
    })
    .min(1),
};

const deleteProfessional = {
  params: Joi.object().keys({
    professionalId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProfessional,
  getProfessionals,
  getProfessional,
  updateProfessional,
  deleteProfessional,
};
