const { getVehicles } = require('../../services/vehicleService');
const { okResponse, serverErrorResponse } = require('../../utils/httpResponses');

module.exports.handler = async (event) => {
    try {
        const vehicles = await getVehicles();
        return okResponse({
            message: 'Vehículos listados exitosamente',
            body: vehicles
        });
    } catch (error) {
        return serverErrorResponse('Error al listar los datos', error);
    }
};
