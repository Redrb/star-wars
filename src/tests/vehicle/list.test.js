const {
  getVehicles,
  getVehiclesFromSource,
} = require("../../services/vehicleService");



describe("listFromDB", () => {
  test("debería listar vehiculos de la bd", async () => {
    const response = await getVehiclesFromSource();
    const sample = response[0];
    expect(Array.isArray(response)).toBe(true);
    expect(sample.name).toBeDefined();
    expect(sample.nombre).not.toBeDefined();
  });
});

