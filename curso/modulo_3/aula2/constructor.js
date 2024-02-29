class Pessoa{
    nome;
    idade;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa = new Pessoa("Kauã", 19)
console.log(pessoa.nome)