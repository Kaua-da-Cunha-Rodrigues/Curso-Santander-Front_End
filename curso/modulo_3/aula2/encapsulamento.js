class Conta{
    #saldo = 0 //O # deixa o atributo privado e não pode ser acessado fora da classe
    #titular
    #ativa

    constructor(titular){
        this.#titular = titular
        this.#ativa = true
    }

    //Método acessor, assim permite ser usado fora do escopo da classe
    get Titular(){
        return this.#titular
    }

    //Assim permitimos que o atributo titular pode ser alterado 
    set Titular(novoTitular){ 
        this.#titular = novoTitular
    }

    #imprimirTitular(){ //método privado
        console.log(`titular: ${this.titular}`)
    }
    imprimirInformacoes(){
        console.log(`conta{titular=${this.titular}, saldo=${this.#saldo}, contaAtiva=${this.#ativa}}`)
        this.#imprimirTitular() //somente pode ser acessado dentro da classe
    }
}

const conta = new Conta("Kauã")
console.log(conta.ativa)
// conta.#ativa = false não funciona
conta.imprimirInformacoes()
conta.Titular //utilizando o get
conta.Titular("Ronaldo")
conta.Titular


