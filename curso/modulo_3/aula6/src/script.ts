class Pessoa{
    private _nome: string
    private _idade: number
    private _cpf: string

    constructor(nome:string, idade: number, cpf: string){
        if (nome.length < 4){
            throw new Error("Nome muito pequeno")
        }
        if (idade < 18){
            throw new Error("Necessário ser maior de idade")
        }

        // const cpfTratado: string = this.tratarCPF(cpf)

        // if (cpfTratado.length != 11){
        //     throw new Error("Necessário um cpf de 11 dígitos")
        // }

        if (cpf.length != 11){
            throw new Error("Necessário um cpf de 11 dígitos")    
        }

        this._nome = nome
        this._idade = idade
        // this._cpf = cpfTratado
        this._cpf = cpf
    }

    // private tratarCPF(cpf: string): string {
    //     return cpf.replaceAll(".", "").replaceAll("-", "").trim() //remove pontos e traços e substitui por espaços vazios e tira espaços vazios 
    // }

    get nome(): string{
        return this._nome
    }
    get idade(): number{
        return this._idade
    }
    get cpf(): string{
        return this._cpf
    }

    apresentarInformacoes(){
        return `${this._nome} -- ${this._idade} -- ${this._cpf}`
    }
}

class Conta{
    private _titular: Pessoa //recebe uma instância da classe pessoa
    private _saldo: number
    private _contaAtiva: boolean

    constructor(titular: Pessoa){
        this._titular = titular
        this._saldo = 0
        this._contaAtiva = true
    }

    get nomeDoTitular():string{
        return this._titular.nome
    }
    get saldo():number{
        return this._saldo
    }

    inativarConta(): boolean{
        if(!this._contaAtiva){ //se for falso, entra ai
            return false
        }

        if (this._saldo > 0){
            return false
        }

        this._contaAtiva = false
        return true
    }

    depositar(valor:number): boolean{
        if (!this._contaAtiva){
            return false
        }

        if (valor < 0){
            return false
        }
        this._saldo += valor
        return true
    }

    sacar(valor: number): boolean{
        if (!this._contaAtiva){
            return false
        }

        if (valor < 0){
            return false
        }

        this._saldo -= valor
        return true
    }

    transferirSaldo(contaDestino: Conta, valor:number): boolean{
        if (this.sacar(valor) && contaDestino._contaAtiva === true){ //se "sacar" retornar true
            contaDestino.depositar(valor)
            return true
        }
        return false
    }
}

const kaua = new Pessoa("Kauã", 19, "00012334512")
const joaozinho = new Pessoa("João", 33, "33487239818")

const contaDoKaua = new Conta(kaua)
const contaDoJoaozinho = new Conta(joaozinho)

// console.log(kaua.apresentarInformacoes())

console.log(`Saldo inicial de Kauã: R$ ${contaDoKaua.saldo}`);

contaDoKaua.depositar(100)
contaDoKaua.transferirSaldo(contaDoJoaozinho, 20)

console.log(`Saldo final de Kauã: R$ ${contaDoKaua.saldo}`)
