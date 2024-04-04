const { getVehiclesFromSource } = require('../../services/vehicleService');
const { mapVehicleData } = require('../../mappers/vehicleMapper');
const { okResponse, serverErrorResponse } = require('../../utils/httpResponses');


module.exports.handler = async (event) => {
    try {
        const sourceVehicles = await getVehiclesFromSource();        
        const vehicles = sourceVehicles.map(item => mapVehicleData(item));
        return okResponse({
            message: 'Vehículos fuente listados exitosamente',
            body: vehicles
        });
    } catch (error) {
        return serverErrorResponse('Ha ocurrido un error al crear el vehículo', error);
    }
};