let numero = "" ;
let total = 0;
do {
    numero = parseFloat(prompt("Ingrese un número"));
    if (isNaN(numero)) {
        alert("No ingresó un numero válido")
    }else{
        total += numero;
    }
    
} while (confirm("Desea continuar añadiendo números?"));

document.write(`La suma total de los numeros introducidos es: ${total}`);