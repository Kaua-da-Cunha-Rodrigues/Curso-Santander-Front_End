class Contas{
    private _nomeDoTitular: string;
    private _saldo: number

    // constructor(nomeDoTitular: string){
    //     this._nomeDoTitular = nomeDoTitular
    //     this._saldo = 0
    // }

    constructor(conta: IConta){
        this._nomeDoTitular = conta.nomeTitular
        this._saldo = conta.saldo
    } //É um método mais utilizado na prática, com a utilizaçao de uma interface definida fora da classe

    get nomeDoTitular():string {
        return this._nomeDoTitular
    }

    set nomeDoTitular(novoNomeDoTitular: string){
        this._nomeDoTitular = novoNomeDoTitular
    }

    get saldo():number{
        return this._saldo
    }

    set saldo(novoSaldo: number){
        if(novoSaldo > 0){
            this._saldo = novoSaldo
        }
    }
}

interface IConta{
    nomeTitular: string
    saldo: number
}
const novaConta2: IConta ={
    nomeTitular: "Kauã",
    saldo: 100

} //objeto tipado com a interface IConta


type TConta = {
    nomeTitular: string,
    saldo: number
} //faz a mesma coisa de interface
const novaConta: TConta = {
    nomeTitular: "Jorge",
    saldo: 200
} //objeto tipado com o type Iconta

const conta = new Conta(novaConta.nomeTitular, novaConta.saldo)
const conta2 = new Conta(novaConta2.nomeTitular, novaConta2.saldo)