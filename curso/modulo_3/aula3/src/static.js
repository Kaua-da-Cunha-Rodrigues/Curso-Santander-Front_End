class Conta{
    titular;
    static totalContas = 0; //atributo estático: Pertence somente a classe, e não às suas instâncias (filhos)

    constructor(nomeTitular){
        this.titular = nomeTitular;
        Conta.totalContas++; //incrementando o atributo estático
    }

    static metodoEstatico(){
        console.log("Este método é estático")
    }

}

console.log(Conta.totalContas) //chamando o atributo estático

const conta = new Conta("Kauã")

console.log(Conta.totalContas)
console.log(Conta.metodoEstatico()) //chamando o método estático

