const httpStatus = require('http-status');
const { WorksFor } = require('../models');
const ApiError = require('../utils/ApiError');

const createWorksFor = async (worksForBody) => {
  return await WorksFor.create(worksForBody);
};
const queryWorksFors = async (filter, options) => {
  const worksFors = await WorksFor.find(filter).populate("company");
  return worksFors;
};

const getWorksForById = async (id) => {
  return WorksFor.findById(id);
};


const updateWorksForById = async (worksForId, updateBody) => {
  const worksFor = await getWorksForById(worksForId);
  if (!worksFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'WorksFor not found');
  }
  Object.assign(worksFor, updateBody);
  await worksFor.save();
  return worksFor;
};

const deleteWorksForById = async (worksForId) => {
  const worksFor = await getWorksForById(worksForId);
  if (!worksFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'WorksFor not found');
  }
  await worksFor.remove();
  return worksFor;
};

module.exports = {
  createWorksFor,
  queryWorksFors,
  getWorksForById,
  updateWorksForById,
  deleteWorksForById,
};
