function filtrarStringsCurtas(strings, tamanhoMinimo) {
    return strings.filter(string => string.length >= tamanhoMinimo);
}

const palavras = ["sol", "lua", "estrela", "planeta", "galáxia"];
const resultado = filtrarStringsCurtas(palavras, 5);

console.log(resultado)