const { handler } = require("../../functions/vehicle/create");


jest.mock("../../services/vehicleservice", () => ({
  saveVehicle: jest.fn().mockImplementation(() => ({
    id: "123",
    nombre: "Sand Crawler",
    modelo: "Digger Crawler",
    costo_en_creditos: 150000,
    longitud: 36.8,
    velocidad_maxima_atmosfera: 30,
    tripulacion: 46,
    pasajeros: 30,
    capacidad_carga: 50000,
    consumibles: "2 months",
    clase_vehiculo: "wheeled",
    pilotos: [],
    peliculas: [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/5/",
    ],
    creado: "2014-12-10T15:36:25.724Z",
    editado: "2014-12-20T21:30:21.661Z",
    url: "https://swapi.py4e.com/api/vehicles/4/",
  })),
}));

describe("createVehicle", () => {
  test("Debería crear un nuevo vehículo", async () => {
    // Mock de los datos de entrada para crear un vehículo
    const requestData = {
      body: JSON.stringify({
        name: "Sand Crawler",
        model: "Digger Crawler",
        manufacturer: "Corellia Mining Corporation",
        cost_in_credits: "150000",
        length: "36.8",
        max_atmosphering_speed: "30",
        crew: "46",
        passengers: "30",
        cargo_capacity: "50000",
        consumables: "2 months",
        vehicle_class: "wheeled",
        pilots: [],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/5/",
        ],
        created: "2014-12-10T15:36:25.724000Z",
        edited: "2014-12-20T21:30:21.661000Z",
        url: "https://swapi.py4e.com/api/vehicles/4/",
      }),
    };

    const response = await handler(requestData, null, null);
    const body = JSON.parse(response.body);
    expect(response.statusCode).toBe(200);
    expect(body.message).toBe("Vehículo creado exitosamente");
  });
});


describe("createVehicle", () => {
  test("Debería pedir nombre requerido", async () => {
    const requestData = {
      body: JSON.stringify({
        model: "Digger Crawler",
        manufacturer: "Corellia Mining Corporation",
        cost_in_credits: "150000",
        length: "36.8",
        max_atmosphering_speed: "30",
        crew: "46",
        passengers: "30",
        cargo_capacity: "50000",
        consumables: "2 months",
        vehicle_class: "wheeled",
        pilots: [],
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/5/",
        ],
        created: "2014-12-10T15:36:25.724000Z",
        edited: "2014-12-20T21:30:21.661000Z",
        url: "https://swapi.py4e.com/api/vehicles/4/",
      }),
    };

    const response = await handler(requestData, null, null);
    const body = JSON.parse(response.body);
    expect(response.statusCode).toBe(500);
    expect(body.message).toBe("Ha ocurrido un error al crear el vehículo");
  });
});