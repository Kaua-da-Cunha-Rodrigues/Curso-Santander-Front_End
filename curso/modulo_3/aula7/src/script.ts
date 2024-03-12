abstract class Pessoa{ //quando uma classe se torna mãe, ela deve ser abstrata, n podendo ser chamada diretamente no código
    private _nome: string
    private _idade: number

    constructor(nome:string , idade: number){
        this._nome = nome
        this._idade = idade
     }
    get nome():string{
        return this._nome
    }
    get idade():number{
        return this._idade
    }

    abstract apresentarInformacoes(): void //método abstrato que é compartilhado com os filhos

    fazerAniversário(): void{
        this._idade += 1
    }
}

class Professor extends Pessoa{

    constructor(nome:string , idade: number){
       super(nome, idade)

    }

    apresentarInformacoes(): void {
        console.log(`O nome do professor: ${this.nome} - a idade do professor: ${this.idade}`);
        
    }

}
class Aluno extends Pessoa{

    constructor(nome:string , idade: number){
       super(nome, idade)

    }

    apresentarInformacoes(): void {
        console.log(`O nome do aluno: ${this.nome} - a idade do aluno: ${this.idade}`);
        
    }

}

const professor = new Professor("Leonardo", 29)
const aluno = new Aluno("Kauã", 19)
// const pessoa = new Pessoa("Kauã", 18) - Uma classe abstrata não pode ter instâncias