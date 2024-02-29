class Conta{
    #nomeTitular;
    #saldo = 0
    #contaAtiva;

    constructor(nomeTitular){
        if(nomeTitular.length >= 4){
            this.#nomeTitular = nomeTitular
            this.#contaAtiva = true
        }else{
            throw new Error("Nome do titular deve ser maior")       
        }
    }

    ativarConta(){
        if(this.#contaAtiva === false){
            this.#contaAtiva = true
        }else{
            console.log("A conta já está ativa")
        }
    }
    inativarConta(){
        if(this.#contaAtiva === true){
            this.#contaAtiva = fase
        }else{
            console.log("A conta já está inativa")
        }   
    }
    depositar(valor){
        this.#saldo += valor
    }

}