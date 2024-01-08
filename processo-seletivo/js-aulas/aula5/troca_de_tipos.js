const numero = 10

//trocar manualmente

const numeroEmFormaDeString = String(numero)
console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString)

console.log(Number("123123"))
console.log(parseFloat("232323.255"))
console.log(parseInt("232323.233"))
console.log(Boolean(0)) //0 é false, maior que isso é true

//troca automática

console.log(10 + "1") //isso não troca, pq ele entende que concatena e n soma
console.log("10" - 1)//isso aqui troca
console.log(10 - "asdasd")