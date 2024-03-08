class Pessoa{
    nome: string
    idade: number
    cpf: string

    constructor(nomePessoa: string, idadePessoa: number, cpfPessoa: string){
        this.nome = nomePessoa
        this.idade = idadePessoa
        this.cpf = cpfPessoa
    }
    exibirDados(): string{
        return `Nome: ${this.nome} \n Idade: ${this.idade} \n CPF: ${this.cpf}`;
        
    }
}

class Conta{
    private nomeTitular: string
    private saldo: number
    private contaAtiva: boolean

    constructor(NomeTitular: string){
        if(NomeTitular.length >= 4){
            this.nomeTitular = NomeTitular
            this.saldo = 0
            this.contaAtiva = true
        }else{
            throw new Error("Nome do titular deve ser maior")
        }
    }

    ativarConta(){
        if(this.contaAtiva === false){
            this.contaAtiva = true
            console.log('Conta ativada')
        }else{
            console.log("A conta já está ativa")
        }
    }

    inativarConta(){
        if(this.contaAtiva === true && this.saldo === 0){
            this.contaAtiva = false
            console.log('Conta desativada')
        }else{
            console.log("A conta já está ativa ou não está zerada")
        }
    }

    depositar(valor: number){
        if(this.contaAtiva === true){
            this.saldo += valor
            console.log(`O valor de ${valor} foi depositado com sucesso`)
        }else{
            console.log("Operação indisponível. Conta inativa");
            
        }
    }

    sacar(valor:number){
        if(valor <= this.saldo && this.contaAtiva === true){
            this.saldo -= valor
        }else{
            console.log("O valor sacado é maior que o saldo em conta ou a conta está inativa")
        }
    }
}

function criarConta(cliente: string){
    
        const conta = new Conta(cliente)

        listaContas.push(conta)
        console.log("Conta criada com sucesso");
    
}

const listaContas: any = []

criarConta("Kauã")
console.log(listaContas[0].inativarConta());
console.log(listaContas[0].ativarConta());
console.log(listaContas[0].depositar(500));
console.log(listaContas[0].obterSaldo());
console.log(listaContas[0].sacar(250));
console.log(listaContas[0].obterSaldo());
