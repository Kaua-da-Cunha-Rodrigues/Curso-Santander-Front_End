Algoritmo

    Matemática: Sequência finita de regras, raciocínios ou operações que, aplicada a um número finito de dados, permite solucionar classes semelhantes de problemas

    Informática: Conjunto de regras e procedimentos lógicos "perfeitamente" definidos que leval à solução de um problema em um número finito de etapas.

JS

    Em JS, a tipagem é dinâmica e fraca

    Tipagem Dinâmica: Qualquer variável pode receber e reatribuir valores de todos os tipos

    Tipagem Fraca: Permite a conversão implícita de tipo quando a operação envolve tipos incompatíveis.

        Ex: Somar uma variável num com uma string, transformaria implicitamente a num em string e concatenaria elas
        
            let num = 18
            let result = num + "2" //
            console.log(result) // imprime 182

Tipos em JS

    Tipos Primitivos: Dado que não é representado através de um objeto: String, number, bigInt, boolean, undefined, null e symbol
            
        BigInt: Usado para números inteiros para precisão arbitrária, ou para números maiores que o limite de inteiros securos. 
            Ex: armazenar a velocidade da luz
                const velocidadeLuz = 300000n

        Symbol: 
