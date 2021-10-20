const httpStatus = require('http-status');
const { Professional } = require('../models');
const ApiError = require('../utils/ApiError');

const createProfessional = async (professionalBody) => {
  return await Professional.create(professionalBody);
};
const queryProfessionals = async (filter, options) => {
  const professionals = await Professional.find(filter).populate("people").populate("worksFor");
  return professionals;
};

const getProfessionalById = async (id) => {
  return Professional.findById(id);
};


const updateProfessionalById = async (professionalId, updateBody) => {
  const professional = await getProfessionalById(professionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Professional not found');
  }
  Object.assign(professional, updateBody);
  await professional.save();
  return professional;
};

const deleteProfessionalById = async (professionalId) => {
  const professional = await getProfessionalById(professionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Professional not found');
  }
  await professional.remove();
  return professional;
};

module.exports = {
  createProfessional,
  queryProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
};
