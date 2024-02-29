class Calculadora{
    operando1;
    operando2;
    resultado;

    constructor(operando1, operando2){
        if(typeof operando1 != "number" || typeof operando2 != "number"){
            throw new Error("Preencha todos os parâmetros")
        }

        this.operando1 = parseFloat(operando1)
        this.operando2 = parseFloat(operando2)
    }

    soma(){
        this.resultado = this.operando1 + this.operando2
        console.log(this.resultado)
    }
    subtracao(){
        this.resultado = this.operando1 - this.operando2
        console.log(this.resultado)   
    }
    multiplicacao(){
        this.resultado = this.operando1 * this.operando2
        console.log(this.resultado)
    }
    divisao(){
        this.resultado = this.operando1 / this.operando2
        console.log(this.resultado)
    }
}

const calculo = new Calculadora(3, 5)
calculo.soma()
calculo.subtracao()
calculo.multiplicacao()
calculo.divisao()