const httpStatus = require('http-status');
const { Class } = require('../models');
const ApiError = require('../utils/ApiError');


const createClass = async (classBody) => {
  if (await Class.isName(classBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  return Class.create(classBody);
};

const queryClasses = async (filter, options) => {
  const classs = await Class.paginate(filter, options);
  return classs;
};

const getClassById = async (id) => {
  return Class.findById(id);
};

const updateClassById = async (classId, updateBody) => {
  const _class = await getClassById(classId);
  if (!_class) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  if (updateBody.email && (await Class.isEmailTaken(updateBody.email, classId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(_class, updateBody);
  await _class.save();
  return _class;
};


const deleteClassById = async (classId) => {
  const _class = await getClassById(classId);
  if (!_class) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found');
  }
  await _class.remove();
  return _class;
};

module.exports = {
  createClass,
  queryClasses,
  getClassById,
  updateClassById,
  deleteClassById,
};
