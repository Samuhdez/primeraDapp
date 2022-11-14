const miContrato = artifacts.require("miContrato");

contract("Smart Contrat", accounts => {

    it("1ºTest - Valor correto de destino", async () =>{
        const instancia = await miContrato.new();
        const fecha = 2015;
        const destino = "Paris";
        const precio = 1500;
        await instancia.guardar(fecha,destino,precio);
        var res = await instancia.consultar(fecha);
        assert.equal(destino, res[0],"Test destino incorrecto")
    });

    it("2ºTest - Valor correto de precio", async () =>{
        const instancia = await miContrato.new();
        const fecha = 2015;
        const destino = "Paris";
        const precio = 1500;
        await instancia.guardar(fecha,destino,precio);
        var res = await instancia.consultar(fecha); 
        assert.equal(precio, res[1],"Test precio incorrecto")
    });
});