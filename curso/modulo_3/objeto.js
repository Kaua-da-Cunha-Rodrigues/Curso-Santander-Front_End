class Animal  { //Classe
    especie;
    nome;
    idade;

    fazerAniversario(){ //Método
        this.idade++;
    }
}

const animal = new Animal() //Objeto

animal.especie = "Felino"
animal.nome = "Rodinei"
animal.idade = 4