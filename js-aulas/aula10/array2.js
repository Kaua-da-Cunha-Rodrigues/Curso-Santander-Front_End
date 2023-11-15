const arr1 = [30, 12, 45, 34, 28]
let arr2 = []

//Fatiamento: slice

console.log(arr1.slice(0, 2)) //Pega o elemento 1 e 2

//adicionando elementos

arr2.push(10, 20, 30) //adiciona no final
arr2.unshift(5) //adiciona no início

//remover elemento

arr2.pop() //remove o último elemento
arr2.shift() //remove o primeiro

//concatenando arrays

arr1.concat(arr2);
arr2.concat(arr1);

//Buscar elementos

let indiceDoElemento34 = arr1.indexOf(34) //se retorna -1, não existe. Se tem mais de um elemento 34, pega o primeiro

const arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3)) //pega o último índice que tem 3

//Descobrindo se existe no array

console.log(arr1.includes(10)) //Retorna true ou false

//Invertendo array

let arr4 = [12, 14, 15, 11]
console.log(arr4.reverse())


