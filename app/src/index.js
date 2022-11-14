import Web3 from "web3";
import MiContrato from "../../build/contracts/miContrato.json"; //abi del contrato

const dir_contrato="0x0916E90b5350b86f956c20C45f1745e2c3E64Fa8";
const mi_direccion="0x73bb200fb0daa2528fcf645c292103d01b8bfb24";
const url = "http://127.0.0.1:8545/";


const web3 = new Web3(url);
const contrato = new web3.eth.Contract(MiContrato.abi, dir_contrato);


const btnGuardar= document.getElementById("btnGuardar");
const btnConsultar= document.getElementById("btnConsultar");
const selector = document.getElementById("tarea");
const divGuardar = document.getElementById("guardarInfo");
const divConsultar = document.getElementById("consultarInfo");

selector.addEventListener('change', async() => {
  var selector_value = document.getElementById("tarea").value;
  if(selector_value == 1){
    divGuardar.style.display = "block";
    divConsultar.style.display = "none";
  }else if(selector_value == 2){
    divGuardar.style.display = "none";
    divConsultar.style.display = "block";
  }else{
    divGuardar.style.display = "none";
    divConsultar.style.display = "none";
  }

});

btnGuardar.addEventListener("click", async() => {
  var fecha = parseInt(document.getElementById("fecha").value);
  var precio = parseInt(document.getElementById("precio").value);
  var destino = document.getElementById("destino").value;
  await contrato.methods.guardar(fecha,destino,precio).send({from: mi_direccion});

} );

btnConsultar.addEventListener("click", async() => {

  var fecha = parseInt(document.getElementById("fecha_ver").value);
  var resultado = document.getElementById("resultado");
  var destino_precio = await contrato.methods.consultar(fecha).call();
  resultado.innerHTML = "El viaje de " + fecha + " se realizó a " + destino_precio[0] + " y tuvo un precio de " + destino_precio[1];

} );