$(document).ready(function () {
    console.log("Ready!");

});

//vars
class pedido {
   constructor (nomeArt, extra){
       this.nomeArt=nomeArt;
       this.extra=extra;
   }
}

class factura{
    constructor (nome, pedidos){
        this.id=new Date().getTime();
        this.nome=nome;
        this.pedidos = pedidos;
    }
}

//var fact1 = new factura(12,"Andre",new pedido("Hambu","Natura");)

var clik = 0;
//var guardarPedido = [];

$("#btn2").click(inserir);

$("#btn1").click(main);

function main() {
    facturar();
}
var facturatemp=[];
function inserir() {
    // console.log(guardarPedido.length+1);
    var nomeArt = $('#ipt2').val();
    var extra = $('#ipt3').val();
    let temp = new pedido(nomeArt ,extra );
    facturatemp.push( temp );
    console.log(temp);
    $("#tabela").append(getRow(nomeArt, extra));
    $("#ipt2").val('');
    $("#ipt3").val('');
}

function getRow(nomeArt, extra) {

return `<tr>
<td>${nomeArt}</td>
<td>${extra}</td>
</tr>`;
}
var factGlobal;
function facturar() {
    //clik++;
    var nome = $('#ipt1').val();
    var fact = new factura (nome,facturatemp);
    //fact.id = clik;
    
    // fact.pedidos=
    console.log(fact);
    factGlobal = fact;

    // for (i=0; i<guardarPedido.length-1; i++){
    $("#txt").text(JSON.stringify(fact));
    // $("#txt").text("O pedido numero " + pedido.id + " com o nome" +pedido.nome +" é" +pedido.pedido +" com o extra" +pedido.extra);

}