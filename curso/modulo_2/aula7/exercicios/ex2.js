/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

function fibonacci(casas){
    let valor1 = 1
    let valor2 = 1
    let valor3 = 1

    console.log(0 , ",")
    console.log(1 , ",")
    
    for(let i = 0; i <= casas; i++){
        console.log(valor3, ", ")
        valor3 = valor1 + valor2
        valor1 = valor2
        valor2 = valor3
    }
}
fibonacci(8)

// function fibonacci(numero) {
//     let resultado = [0, 1];
//     for (let i = 2; i < numero; i++) {
//       resultado.push(resultado[i - 1] + resultado[i - 2]);
//     }
//     return resultado;
//   }