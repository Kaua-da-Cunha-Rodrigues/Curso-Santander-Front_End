function frequenciaPalavras(texto){
    let palavras = texto.split(" ");

    let frequencias = {};
    for(let palavra of palavras){
        if(!frequencias[palavra]){
            frequencias[palavra = palavras.filter(p => p ==palavra).length]
        }
    }
}