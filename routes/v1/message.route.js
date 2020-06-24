const express = require('express');
const validate = require('../../utils/middlewares/validationHandler');
const { messageValidation } = require('../../utils/validations');
const { messageController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(messageValidation.message), messageController.createMessage)
  .get(messageController.getMessages);

module.exports = router;
