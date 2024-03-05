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
        if(this.#contaAtiva === true && this.#saldo > valor && valor <= this.#saldo && !isNaN(valor)){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito com sucesso!`)
        }else{
            console.log("Não foi possível realizar o saque")
        }
    }
    exibirDados(){
        console.log("------------------------------------")
        console.log(`Nome do Titular: ${this.#nomeTitular}`)
        console.log(`Saldo Atual: ${this.#saldo}`)
        console.log(`Conta ativa: ${this.#contaAtiva}`)
        console.log("------------------------------------")
    }

}
function criarConta(cliente) {
    let id = 0
    if(typeof cliente === "string"){
        const pessoa = new Conta(cliente)
        
        listaContas.push(pessoa);
        console.log("Conta Criada com sucesso!")

        id += 1
    }else{
        console.log("Digite um nome válido")
    }

}
function varrerClientes(lista){
    for(const contas of listaContas){
        console.log(contas.exibirDados());
    }
}

let listaContas = []

console.log(criarConta("Kauã")) //armazena uma conta na classe
console.log(criarConta("Cláudio")) //armazena uma conta na classe
varrerClientes(listaContas)





