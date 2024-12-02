let union = "";
do {
  let cadena = prompt("Ingrese una cadena de texto");
  if (cadena !== null && cadena !== "") {
    union += cadena + " - ";
  }
} while (confirm("Desea agregar mas texto?"));
union = union.substring(0,union.length-3)
if (union === "") {
  document.write(`No ingresó ningun texto`);
} else {
  document.write(`${union}`);
}