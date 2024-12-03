// let nota = parseInt(prompt('Ingrese su nota (DEL 1 al 10): '))

// switch (true) {
//     case nota >= 0 && nota <= 2:
//         alert('Su nota es MUY DEFICIENTE')
//         break;
//     case nota === 3 || nota === 4:
//         alert('Su nota es  INSUFICIENTE')
//         break;
//     case nota === 5 || nota === 6:
//         alert('Su nota es SUFICIENTE')
//         break;
//     case nota === 7:
//         alert('Su nota es BIEN')
//         break;
//     case nota === 8 || nota === 9:
//         alert('Su nota es NOTABLE')
//         break;
//     case nota === 10:
//         alert('Su nota es SOBRESALIENTE')
//         break;

//     default:
//         alert("NUMERO ERRONEO")
//         break;
// }

let nota;
do {
    let entrada = prompt('Ingrese una nota del 0 al 10')
    if (entrada === null || entrada == '') {
        alert('No se ingreso ninguna nota')
        break;
    }
        nota = +(entrada)
        if (isNaN(nota)) {
            alert('Introduce un numero valido')
        } else if (nota < 0 || nota > 10) {
            alert('Numero erroneo')
        } else {
            switch (nota) {
                case 0:
                case 1:
                case 2:
                    alert('Muy Deficiente')
                    break;
                case 3:
                case 4:
                    alert('Insuficiente')
                    break;
                case 5:
                case 6:
                    alert('Suficiente')
                    break;
                case 7:
                    alert('Bien')
                    break;
                case 8:
                case 9:
                    alert('Notable')
                    break;
                case 10:
                    alert('Sobresaliente')
                    break;
            }
        }
  
} while (confirm('Desea continuar?'));