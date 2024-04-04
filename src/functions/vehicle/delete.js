const { deleteVehicle } = require('../../services/vehicleService');
const { okResponse, serverErrorResponse } = require('../../utils/httpResponses');

module.exports.handler = async (event) => {
    try {
        const { id } = event.pathParameters;
        const result = await deleteVehicle(id);
        return okResponse({
            message: result
        });
    } catch (error) {
        return serverErrorResponse('Error al eliminar el elemento', error);
    }
};
