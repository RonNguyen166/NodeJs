const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const professionalValidation = require('../../validations/professional.validation');
const professionalController = require('../../controllers/professional.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(professionalValidation.createProfessional), professionalController.createProfessional)
  .get(validate(professionalValidation.getProfessionals), professionalController.getProfessionals);

router
  .route('/:professionalId')
  .get(validate(professionalValidation.getProfessional), professionalController.getProfessional)
  .patch(validate(professionalValidation.updateProfessional), professionalController.updateProfessional)
  .delete(validate(professionalValidation.deleteProfessional), professionalController.deleteProfessional);

module.exports = router;
