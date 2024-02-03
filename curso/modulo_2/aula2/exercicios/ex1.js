/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste seguindo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em di
ante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = "a"
let reajuste 

if(salario <= 1500){
    reajuste = 20 / 100
}else if(salario > 1500 && salario < 1700){
    reajuste = 15 / 100  
}else if(salario >= 1700 && salario < 2000){
    reajuste = 10 / 100
}else if (salario > 2000){
    reajuste = 5 / 100
}else{
    return console.log("Erro detectado!")
}

let valorAumentado = (salario * reajuste)
let novoSalario = salario + valorAumentado
console.log("-------------------------")
console.log("Salário antes do reajuste: " + salario)
console.log("Percentual de Aumento Aplicado: " + reajuste*100 + "%")
console.log("Valor do Aumento: " + valorAumentado)
console.log("Novo Salário: " + novoSalario)
console.log("-------------------------")



