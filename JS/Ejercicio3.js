
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