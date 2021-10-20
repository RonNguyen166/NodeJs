const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const peopleValidation = require('../../validations/people.validation');
const peopleController = require('../../controllers/people.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(peopleValidation.createPeople), peopleController.createPeople)
  .get(validate(peopleValidation.getPeoples), peopleController.getPeoples);

router
  .route('/:peopleId')
  .get(validate(peopleValidation.getPeople), peopleController.getPeople)
  .patch(validate(peopleValidation.updatePeople), peopleController.updatePeople)
  .delete(validate(peopleValidation.deletePeople), peopleController.deletePeople);

module.exports = router;
