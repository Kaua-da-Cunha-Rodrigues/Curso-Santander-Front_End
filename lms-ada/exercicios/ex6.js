const produtos = [
    { nome: "Smartphone", quantidade: 10 },
    { nome: "Notebook", quantidade: 5 },
    { nome: "TV", quantidade: 15 },
    { nome: "Fones de ouvido", quantidade: 20 },
    { nome: "Tablet", quantidade: 8 },
];

function contagemProdutosEstoque(produtos){
    let quantidadeProdutos = 0
    
    for(let item of produtos){
        quantidadeProdutos += item.quantidade  
    }
    return console.log(quantidadeProdutos)
}
contagemProdutosEstoque(produtos)
