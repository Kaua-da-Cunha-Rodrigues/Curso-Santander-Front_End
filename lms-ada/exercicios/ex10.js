const vendedores = [
    {
      nome: "João",
      vendas: [5000, 6000, 7000]
    },
    {
      nome: "Maria",
      vendas: [8000, 9000, 10000]
    }
];
function calcularMediaVendas(lista){
    const vendedoresMedia ={};

    for(let chave of lista){
        vendedoresMedia.nome = chave.nome
        for(let i = 0; i < chave.vendas.length; i++){
            var auxiliar = chave[i].vendas  
        }
        vendedoresMedia.mediaVendas = auxiliar
        
        
    }
        console.log(vendedoresMedia)  
}

calcularMediaVendas(vendedores)