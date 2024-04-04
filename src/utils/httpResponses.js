const okResponse = (data) => ({
    statusCode: 200,
    body: JSON.stringify(data)
});

const serverErrorResponse = (message, error) => ({
    statusCode: 500,
    body: JSON.stringify({
        message,
        error: error ? error.message : null
    })
});

module.exports = {
    okResponse,
    serverErrorResponse
};
