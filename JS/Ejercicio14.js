let resultadoFrase = "";
let frase = prompt("Ingrese una frase:");

if (frase === "" || frase === null) {
    
    alert('No ingreso ninguna frase');
    
}else{
    
    
    for(let i = 0; i < frase.length ; i++ ){
        resultadoFrase += frase.substring(i, i+1) + "-"
    }
    resultadoFrase = resultadoFrase.substring(0,resultadoFrase.length-1)
    document.write(`<h1>${resultadoFrase}</h1>`);
    
}