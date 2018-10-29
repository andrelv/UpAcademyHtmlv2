//Descricao
// a=combustivel
// b=cor
// c=nrRodas 


class Veiculo {
    constructor(a, b, c=2){

        this.combustivel=a;
        this.cor=b;
        this.nrRodas=c;
        this.contaQuilometros=0;
    }
    andar(distancia=1){
        //this.combustivel--;
        //super.andar(distancia);
        this.contaQuilometros+=distancia;
        
        return "Andou" +distancia +"Kms";
    }
}

var carro = new Veiculo("gasoleo", "red",4);
carro.andar();
console.log("carro.contaQuilometros:", carro.contaQuilometros);

class Automovel extends Veiculo{
    constructor(combustivel,cor, nrAssentos,numeroPortas){
        super(combustivel,cor,4);
        this.nrAssentos=nrAssentos;
        this.numeroPortas=numeroPortas;
        this.numeroVolantes=1;
        this.litrosDeposito=10;
    }
    tirarCombustivel(){
        this.litrosDeposito-=litros;
    }

}

var auto1 = new Automovel("gasolina95","preto", 2, 4,);
auto1.andar(12);
console.log("Auto1 andou", auto1.contaQuilometros);
