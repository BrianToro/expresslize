const { Message } = require('../models').models;

const createMessage = async (message) => {
  const newMessage = await Message.create(message);
  return newMessage;
};

const getMessages = async () => {
  const messages = await Message.findAll();
  return messages;
};

module.exports = { createMessage, getMessages };
