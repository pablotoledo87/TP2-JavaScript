let numero;
do {
  numero = parseInt(prompt("Ingrese un número (no mayor a 50)"));
  if (numero > 50 || numero <= 0 || isNaN(numero)) {
    alert("Número inválido.Ingrese un número del 1 al 50");
  }
} while (numero > 50 || numero <= 0 || isNaN(numero));


for (let filas = 1; filas <= numero ; filas++) {
    
    for (let columnas = 1; columnas < filas; columnas++) {
        document.write(`${columnas}`)
    }
    document.write(`${filas}<br>`)
    
}