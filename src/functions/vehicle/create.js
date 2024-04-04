const { vehicleSchema } = require('../../validations/vehicleValidation');
const { saveVehicle } = require('../../services/vehicleService');
const { v4: uuidv4 } = require('uuid');
const { mapVehicleData } = require('../../mappers/vehicleMapper');
const { okResponse, serverErrorResponse } = require('../../utils/httpResponses');


module.exports.handler = async (event) => {
    try {
        const requestData = JSON.parse(event.body);
        const { error, value } = vehicleSchema.validate(requestData);
        if (error) {
            throw new Error(error.details[0].message);
        }
        const vehicleId = uuidv4();
        const vehicleData = mapVehicleData(value, vehicleId);
        const savedVehicle = await saveVehicle(vehicleData);
        return okResponse({
            message: 'Vehículo creado exitosamente',
            vehicleData: savedVehicle
        });
    } catch (error) {
        return serverErrorResponse('Ha ocurrido un error al crear el vehículo', error);
    }
};