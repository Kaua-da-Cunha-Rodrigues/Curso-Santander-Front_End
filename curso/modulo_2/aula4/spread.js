const aluno = {
    name: "Kauã",
    age: 19,
    documentNumber: "11111111111",
    addrres:{
        street: "Rua A",
        number: 258,
        zipCode: "23935-005"
    }
}

const {name, age, ...rest} = aluno //Separa os atributos name, age e em pequenos objetos constantes específicos (objeto name e age). O que sobrar, fica no rest
console.log(name);
console.log(age);
console.log(rest);