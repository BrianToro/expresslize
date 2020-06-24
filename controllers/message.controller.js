const Boom = require('@hapi/boom');
const { messageService } = require('../services');
const { errorHandler } = require('../utils/middlewares/errorHandlers.js');

const createMessage = async (req, res) => {
  try {
    const message = await messageService.createMessage(req.body);
    res.status(200).json({
      success: true,
      message: 'Message created!',
      data: message,
    });
  } catch (err) {
    errorHandler(Boom.badImplementation(err), req, res);
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await messageService.getMessages();
    res.status(200).json({
      success: true,
      message: 'Messages listed!',
      data: messages,
    });
  } catch (err) {
    errorHandler(Boom.badImplementation(err), req, res);
  }
};

module.exports = { createMessage, getMessages };
