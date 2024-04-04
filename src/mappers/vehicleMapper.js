const Vehicle = require('../models/vehicle');

const mapVehicleData = (requestData, vehicleId=null) => {
    const vehicle = new Vehicle({
        id: vehicleId,
        nombre: requestData.name,
        modelo: requestData.model,
        fabricante: requestData.manufacturer,
        costo_en_creditos: parseInt(requestData.cost_in_credits), 
        longitud: parseFloat(requestData.length), 
        velocidad_maxima_atmosfera: parseInt(requestData.max_atmosphering_speed), 
        tripulacion: parseInt(requestData.crew), 
        pasajeros: parseInt(requestData.passengers), 
        capacidad_carga: parseInt(requestData.cargo_capacity), 
        consumibles: requestData.consumables,
        clase_vehiculo: requestData.vehicle_class,
        pilotos: requestData.pilots,
        peliculas: requestData.films,
        creado: new Date(requestData.created), 
        editado: new Date(requestData.edited), 
        url: requestData.url
    });

    return vehicle;
};

module.exports = {
    mapVehicleData
};