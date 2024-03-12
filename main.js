let usuario = prompt("Ingrese su Nombre");
alert("Hola " + usuario + " Bienvenido(a) a mi convertidor...");

// array de objetos
const VALOR = [{
    moneda: "dolar",
    valor: 964.95
},
{
    moneda: "euro",
    valor: 1055.74
}]

function convertir_dolar(cantidad) {
    // buscando el valor del dolar
    valor_dolar = VALOR.find((valor) => valor.moneda === "dolar").valor;
    return cantidad * valor_dolar;
}
function convertir_euro(cantidad) {
    // buscando el valor del euro
    valor_euro = VALOR.find((valor) => valor.moneda === "euro").valor;
    return cantidad * valor_euro;
}

function resultado() {
  let cantidad = document.getElementById("cantidad").value;
  let moneda = document.getElementById("moneda").value;
  let calculos = 0;
 
  if (moneda === "euro") {
    calculos = convertir_euro(Number(cantidad));
  } else {
    calculos = convertir_dolar(Number(cantidad));
  }
  
  document.getElementById("resultados").value = calculos;
}
