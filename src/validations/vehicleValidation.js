const Joi = require('joi');

const vehicleSchema = Joi.object({
    name: Joi.string().required(),
    model: Joi.string().required(),
    manufacturer: Joi.string().required(),
    cost_in_credits: Joi.number().required(),
    length: Joi.number().required(),
    max_atmosphering_speed: Joi.number().required(),
    crew: Joi.number().required(),
    passengers: Joi.number().required(),
    cargo_capacity: Joi.number().required(),
    consumables: Joi.string().required(),
    vehicle_class: Joi.string().required(),
    pilots: Joi.array().items(Joi.string()).required(),
    films: Joi.array().items(Joi.string()).required(),
    created: Joi.date().required(),
    edited: Joi.date().required(),
    url: Joi.string().required()
});

module.exports = {
    vehicleSchema
};