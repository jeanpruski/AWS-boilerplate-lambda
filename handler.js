'use strict';
const toolsService = require("./services/tools_service");

module.exports.process = async (event) => {
  const myMessage = await toolsService.getMyMessage();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: myMessage,
        input: event,
      },
      null,
      2
    ),
  };
};
