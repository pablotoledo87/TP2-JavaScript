// let union = "";
// do {
//   let cadena = prompt("Ingrese una cadena de texto");
//   if (cadena !== null && cadena !== "") {
//     union += cadena + " - ";
//   }
// } while (confirm("Desea agregar mas texto?"));
// union = union.substring(0,union.length-3)
// if (union === "") {
//   document.write(`No ingresó ningun texto`);
// } else {
//   document.write(`${union}`);
// }
 let resultado = "";
 do {
  let palabra = prompt('Ingrese una palabra')
  if (palabra === null) {
    alert('Ingrese una palabra')
    break
  } else if(resultado === ""){
    resultado = palabra;
  }else{
    resultado = resultado + '-' + palabra
  }
 } while (confirm('Desea continuar?'));

 document.write(resultado || 'No se ingresaron palabras')