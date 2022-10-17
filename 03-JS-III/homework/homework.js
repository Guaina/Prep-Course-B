// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var suma = numeros.reduce(function (acc, elem) {
     return acc + elem;
    })
    return suma;
   }

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = [];
  for (i = 0; i < array.length; i++) {
    var par = array[i] % 2;
    if (par === 0){
      pares.push(array[i]);
    }
  } return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var alCuadrado = []
  for (i = 0; i < array.length; i++){
    var potencia = array[i] ** 2;
    alCuadrado.push(potencia);
  }
  return alCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var resultado = 0
  for (i = 0; i < array.length; i++){
    var resultado = resultado + array[i];
  }
  return resultado;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var digitos = num.toString()
  return digitos.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
