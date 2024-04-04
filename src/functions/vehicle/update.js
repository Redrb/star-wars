const { updateVehicle } = require('../../services/vehicleService');
const { mapVehicleData } = require('../../mappers/vehicleMapper');
const { okResponse, serverErrorResponse } = require('../../utils/httpResponses');
const { vehicleSchema } = require('../../validations/vehicleValidation');

module.exports.handler = async (event) => {
    try {
        const { id } = event.pathParameters; // Suponiendo que el ID esté en los parámetros de la ruta
        const requestData = JSON.parse(event.body);
        const { error, value } = vehicleSchema.validate(requestData);
        if (error) {
            throw new Error(error.details[0].message);
        }
        await updateVehicle(mapVehicleData(value, id), id);
        return okResponse({
            message: 'Elemento actualizado correctamente'
        });

    } catch (error) {
        return serverErrorResponse('Error al actualizar', error);
    }
};
