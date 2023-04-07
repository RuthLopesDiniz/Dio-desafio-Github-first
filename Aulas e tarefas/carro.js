//Crie uma classe para representar carros. 
//Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
//Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
//gasto em reais para realizar este percurso.

class Carro{
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm){//função
        this.marca = marca;//atribuindo ao atributo marca o valor que estamos recebendo no construtor.
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;

    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia*this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastoDePercurso(70, 5))//invocar função
const Palio = new Carro('Fiat', 'preto', 1/10)
console.log(Palio.calcularGastoDePercurso(70, 5))