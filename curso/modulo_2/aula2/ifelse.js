const tenhoDinheiro = true
const diaClaro = true

if(tenhoDinheiro && diaClaro){
    console.log("Praia")
}else{
    console.log("Ficar em casa")
}
ternario() //só usa se o bloco for uma única instrução
function ternario(){
    return tenhoDinheiro && diaClaro ? console.log("praia"): console.log("casa") //se true, retorna praia, senão retorna casa
}