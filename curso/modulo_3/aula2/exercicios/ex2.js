/*
    REQUISITOS:

    O saldo deve ser inicializado com zero e o atributo contaAtiva como true;

    A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);

    O depositar e o sacar só poderão operar se tiver saldo disponível;

    A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;

    Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
    Faça uso de sua classe em um script;

    Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);
*/

class Conta{
    #nomeTitular;
    #saldo = 0
    #contaAtiva;

    constructor(nomeTitular){
        if(nomeTitular.length >= 4 && typeof nomeTitular === "string"){
            this.#nomeTitular = nomeTitular
            this.#contaAtiva = true
        }else{
            throw new Error("Nome do titular deve ser maior")       
        }
    }

    get titular(){
        return this.#nomeTitular  
    }
    get Saldo(){
        return this.#saldo
    }

    ativarConta(){
        if(this.#contaAtiva === false){
            this.#contaAtiva = true
            console.log("Conta ativada com sucesso!")
        }else{
            console.log("A conta já está ativa")
        }
    }
    inativarConta(){
        if(this.#contaAtiva === true && this.#saldo === 0){
            this.#contaAtiva = false
            console.log("Conta desativada com sucesso!")
        }else{
            console.log("A conta já está inativa ou não está totalmente zerada")
        }   
    }
    depositar(valor){
        if(this.#contaAtiva === true){
            this.#saldo += valor
            console.log(`Depósito de R$ ${valor} feito com sucesso!`)
        }

    }
    sacar(valor){
        if(this.#contaAtiva === true && this.#saldo > 0 && valor <= this.#saldo && !isNaN(valor)){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito com sucesso!`)
        }    
    }
    exibirDados(){
        console.log(this.#nomeTitular)
        console.log(this.#saldo)
        console.log(this.#contaAtiva)
    }

}

let listaContas = []
function criarConta(cliente) {
    let id = 0
    if(typeof cliente === "string"){
        const id = new Conta(cliente)
        
        const novaConta = {
        id: listaContas.length,
        titular: id.titular,
        saldo: 0,
        contaAtiva: true
        }
        listaContas.push(novaConta);
        console.log("Conta Criada com sucesso")

        id += 1
    }else{
        console.log("Digite um nome válido")
    }

}
console.log(criarConta("Kauã"))
console.log(criarConta("Cláudio"))
console.log(listaContas[0].id.exibirDados())
console.log(listaContas)

// const listaContas = {};

// const cliente = new Conta("Kauã")
// const cliente2 = new Conta("Jorge")
// let clienteX
// listaContas.push(clienteX = new Conta("Maria"))

// listaContas.push(cliente)
// listaContas.push(cliente2)

// for(const conta of listaContas){
//     console.log(conta.exibirDados());
// }


//OK
// console.log(cliente.inativarConta())
// console.log(cliente.exibirDados())
// console.log(cliente.ativarConta())
// console.log(cliente.exibirDados())



