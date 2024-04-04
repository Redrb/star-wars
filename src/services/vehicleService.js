const Vehicle = require('../models/vehicle');
require('dotenv').config();
const axios = require('axios');

const saveVehicle = async (vehicleData) => {
    try {
        const vehicle = new Vehicle(vehicleData);
        await vehicle.save();
        return vehicle;
    } catch (error) {
        throwErrorGenericMessage('guardar', error.message);
    }
};

const getVehiclesFromSource = async () => {
    try {
        const baseUrl = process.env.BASE_API_URL;
        const {data} = await axios.get(`${baseUrl}/vehicles`);
        return data.results;
    } catch (error) {
        throwErrorGenericMessage('listar desde fuente', error.message);
    }
};
const getVehicles = async () => {
    try {
        const vehicles = await Vehicle.scan().exec();
        return vehicles;
    } catch (error) {
        throwErrorGenericMessage('listar', error.message);
    }
};

const updateVehicle = async (vehicleData, id) => {
    try {
        const existingVehicle = await Vehicle.get(id);
        if (!existingVehicle) {
            throwErrorGenericMessage('buscar', "no encontrado");
        }
        Object.assign(existingVehicle, vehicleData);
        await existingVehicle.save();
        return existingVehicle;
    } catch (error) {
        throwErrorGenericMessage('actualizar', error.message);
    }
};

const deleteVehicle = async (id) => {
    try {
        await Vehicle.delete({ id });
        return `vehiculo identificado con: ${id} fue eliminado`;
    } catch (error) {
        throwErrorGenericMessage('eliminar', error.message);
    }
};

const throwErrorGenericMessage = (action, message) => {
    throw new Error(`Error al ${action} el vehículo en la base de datos: ${message}`);
}


module.exports = {
    saveVehicle,
    getVehicles,
    updateVehicle,
    deleteVehicle,
    getVehiclesFromSource
};