let edad = parseInt(prompt('INGRESE SU EDAD: '))

if (isNaN(edad)) {
    alert('INGRESE UN NUMERO VALIDO')
}if (edad>=18) {
    alert('USTED ES MAYOR DE EDAD, PUEDE CONDUCIR')
} else {
    alert('USTED ES MENOR DE EDAD, NO PUEDE CONDUCIR')
}