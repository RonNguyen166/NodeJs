const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPeople = {
  body: Joi.object().keys({
    pid: Joi.string().required(),
    pName: Joi.string().required(),
    sex: Joi.boolean().required(),
    address: Joi.string().required(),
    dob: Joi.date().required(),
    phone: Joi.string().required(),
  }),
};

const getPeoples = {
  query: Joi.object().keys({
    pName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPeople = {
  params: Joi.object().keys({
    peopleId: Joi.string().custom(objectId),
  }),
};

const updatePeople = {
  params: Joi.object().keys({
    peopleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        pid: Joi.string(),
        pName: Joi.string(),
        sex: Joi.boolean(),
        address: Joi.string(),
        dob: Joi.date(),
        phone: Joi.string(),
    })
    .min(1),
};

const deletePeople = {
  params: Joi.object().keys({
    peopleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPeople,
  getPeoples,
  getPeople,
  updatePeople,
  deletePeople,
};
