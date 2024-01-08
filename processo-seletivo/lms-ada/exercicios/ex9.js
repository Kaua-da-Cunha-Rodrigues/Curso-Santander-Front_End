const clientes = [
    { nome: 'David', comSaldoDevedor: true}, //uma chave
    { nome: 'Vinoth', comSaldoDevedor: true}, //outra chave
    { nome: 'Divya', comSaldoDevedor: false}, //assim segue
    { nome: 'Ishitha', comSaldoDevedor: false},
    { nome: 'Thomas', comSaldoDevedor: true}
];
function clientesComSaldoDevedor(lista){
    let novaLista = [{}] //criei a lista pra guardar

    for(let chave of lista){ //rodei toda a lista pra procurar
        if(chave.comSaldoDevedor == true){ //procura nas chaves o atributo "comSaldoDevedor" que possui valor true
            novaLista.push(chave) //atribui a lista criada
        }
    }
    return novaLista //retorna a variável
}

console.log(clientesComSaldoDevedor(clientes))