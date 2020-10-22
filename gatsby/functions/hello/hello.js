// handlers
exports.handler = async (event, context) =>
  //   console.log(event);
  // implicit return 👇
  ({
    statusCode: 200,
    body: 'Hello SERVERLESS!',
  });
