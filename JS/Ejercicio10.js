let filas = parseInt(prompt('Ingrese un numero de filas: '));
let columnas = parseInt(prompt('Ingrese un numero de columnas: '));

if (isNaN(filas)|| filas  <= 0 || isNaN(columnas) || columnas <= 0) {
    alert('Por favor ingresa un numero valido mayor que 0')
}else{
    let total = filas * columnas;
    document.write('<table border = "1" style = "border-collapse text-align:center;">')
    for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
        document.write('<tr>');
        for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
        document.write('<td>' +total+ '</td>');
        total--;
            
        }
        document.write('</tr>')
        
    }
    document.write('</table>')
}