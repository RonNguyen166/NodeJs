const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createWorksFor = {
  body: Joi.object().keys({
    company: Joi.string().required(),
    dateOfJoining: Joi.date().required(),
    salary: Joi.number().required(),
  }),
};

const getWorksFors = {
  query: Joi.object().keys({
    salary: Joi.number().integer(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWorksFor = {
  params: Joi.object().keys({
    worksForId: Joi.string().custom(objectId),
  }),
};

const updateWorksFor = {
  params: Joi.object().keys({
    worksForId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        company: Joi.string(),
        dateOfJoining: Joi.date(),
        salary: Joi.number()
    })
    .min(1),
};

const deleteWorksFor = {
  params: Joi.object().keys({
    worksForId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createWorksFor,
  getWorksFors,
  getWorksFor,
  updateWorksFor,
  deleteWorksFor,
};
