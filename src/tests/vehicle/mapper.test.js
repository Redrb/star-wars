const { mapVehicleData } = require("../../mappers/vehicleMapper");
describe("mapVehicle", () => {
  test("Debería mapear un de ingles a español", async () => {
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

    const result = mapVehicleData(requestData);
    expect(result.nombre).toBe(requestData.name);
    expect(result.modelo).toBe(requestData.model);
    expect(result.fabricante).toBe(requestData.manufacturer);
    expect(result.consumibles).toBe(requestData.consumables);
    expect(result.clase_vehiculo).toBe(requestData.vehicle_class);
    expect(result.url).toBe(requestData.url);
  });
});

