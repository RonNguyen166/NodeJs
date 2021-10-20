const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { worksForService } = require('../services');

const createWorksFor = catchAsync(async (req, res) => {
  const worksFor = await worksForService.createWorksFor(req.body);
  res.status(httpStatus.CREATED).send(worksFor);
});

const getWorksFors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['salary']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   options.populate = "worksFor";
  const result = await worksForService.queryWorksFors(filter, options);
  res.send(result);
});

const getWorksFor = catchAsync(async (req, res) => {
  const worksFor = await worksForService.getWorksForById(req.params.worksForId);
  if (!worksFor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'WorksFor not found');
  }
  res.send(worksFor);
});

const updateWorksFor = catchAsync(async (req, res) => {
  const worksFor = await worksForService.updateWorksForById(req.params.worksForId, req.body);
  res.send(worksFor);
});

const deleteWorksFor = catchAsync(async (req, res) => {
  await worksForService.deleteWorksForById(req.params.worksForId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWorksFor,
  getWorksFors,
  getWorksFor,
  updateWorksFor,
  deleteWorksFor,
};
