// let numero = "" ;
// let total = 0;
// do {
//     numero = parseFloat(prompt("Ingrese un número"));
//     if (isNaN(numero)) {
//         alert("No ingresó un numero válido")
//     }else{
//         total += numero;
//     }
    
// } while (confirm("Desea continuar añadiendo números?"));

// document.write(`La suma total de los numeros introducidos es: ${total}`);

let suma = 0;
do {
    let numero = prompt('Ingrese un numero')
    if (numero === null) {
        break;
        
    }else if (!isNaN(numero) && numero.trim() !== '') {
        suma += +(numero)
    }else{
        alert(`${numero} no es un numero valido`)
    }
} while (true);

document.write('La suma de los numero es: ' +suma)