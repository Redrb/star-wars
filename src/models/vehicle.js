const dynamoose = require('dynamoose');
const { Schema } = dynamoose;
const vehicleSchema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    nombre: {
        type: String,
        required: true
    },
    modelo: {
        type: String
    },
    fabricante: {
        type: String
    },
    costo_en_creditos: {
        type: Number
    },
    longitud: {
        type: Number
    },
    velocidad_maxima_atmosfera: {
        type: Number
    },
    tripulacion: {
        type: Number
    },
    pasajeros: {
        type: Number
    },
    capacidad_carga: {
        type: Number
    },
    consumibles: {
        type: String
    },
    clase_vehiculo: {
        type: String
    },
    pilotos: {
        type: Array,
        schema: [String]
    },
    peliculas: {
        type: Array,
        schema: [String]
    },
    creado: {
        type: Date
    },
    editado: {
        type: Date
    },
    url: {
        type: String
    }
});

// Definir el modelo 'Vehicle' a partir del esquema
const Vehicle = dynamoose.model('vehicles', vehicleSchema);

module.exports = Vehicle;