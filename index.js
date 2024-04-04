module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Reto técnico por Oscar Alexis Bardales Minchán!!",
      },
      null,
      2
    ),
  };
};
