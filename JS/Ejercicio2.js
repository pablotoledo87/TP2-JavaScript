let nota = parseInt(prompt('Ingrese su nota (DEL 1 al 10): '))

switch (true) {
    case nota >= 0 && nota <= 2:
        alert('Su nota es MUY DEFICIENTE')
        break;
    case nota === 3 || nota === 4:
        alert('Su nota es  INSUFICIENTE')
        break;
    case nota === 5 || nota === 6:
        alert('Su nota es SUFICIENTE')
        break;
    case nota === 7:
        alert('Su nota es BIEN')
        break;
    case nota === 8 || nota === 9:
        alert('Su nota es NOTABLE')
        break;
    case nota === 10:
        alert('Su nota es SOBRESALIENTE')
        break;

    default:
        alert("NUMERO ERRONEO")
        break;
}