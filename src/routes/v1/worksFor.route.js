const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const worksForValidation = require('../../validations/worksFor.validation');
const worksForController = require('../../controllers/worksFor.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(worksForValidation.createWorksFor), worksForController.createWorksFor)
  .get(validate(worksForValidation.getWorksFors), worksForController.getWorksFors);

router
  .route('/:worksForId')
  .get(validate(worksForValidation.getWorksFor), worksForController.getWorksFor)
  .patch(validate(worksForValidation.updateWorksFor), worksForController.updateWorksFor)
  .delete(validate(worksForValidation.deleteWorksFor), worksForController.deleteWorksFor);

module.exports = router;
