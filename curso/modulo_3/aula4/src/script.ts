class Pessoa{
    Nome: string
    private IsAlive: boolean
    static NumeroPessoas: number

    constructor(nome: string){
        this.Nome = nome
        this.IsAlive = true
        Pessoa.NumeroPessoas++
    }

    //quando fora do parêntese, ele indica que o retorno é uma string
    apresentar():string { 
        return `meu nome é ${this.Nome}`
    }

    //quando fora do parêntese, ele indica que o retorno é uma string
    get isAlive(): boolean {
        return this.IsAlive
    }

    //Quando dentro do parêntese, indica que a entrada é um boolean
    set isAlive(alive: boolean){
        this.IsAlive = alive
    }
}

let pessoa = new Pessoa("Kauã")
console.log(pessoa.apresentar())

