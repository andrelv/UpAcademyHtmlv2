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
    constructor ( nome, pedidos){
        this.id=new Date().getTime;
        this.nome=nome;
        this.pedidos=[pedido];
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

function inserir() {
    // console.log(guardarPedido.length+1);
    pedido.nomeArt = $('#ipt2').val();
    pedido.extra = $('#ipt3').val();
    var A=[pedido.nomeArt,pedido.extra];
    console.log(pedido);
    $("#tabela").append(getRow(pedido.nomeArt, pedido.extra));
    $("#ipt2").val('');
    $("#ipt3").val('');
}

function getRow(nomeArt, extra) {

return `<tr>
<td>${nomeArt}</td>
<td>${extra}</td>
</tr>`;
}

function facturar() {
    //clik++;
    var fact = new factura (nome,new pedido(nomeArt,extra));
    //fact.id = clik;
    fact.nome = $('#ipt1').val();
    // fact.pedidos=
    console.log(fact);

    // for (i=0; i<guardarPedido.length-1; i++){
    $("#txt").text(fact);
    // $("#txt").text("O pedido numero " + pedido.id + " com o nome" +pedido.nome +" é" +pedido.pedido +" com o extra" +pedido.extra);

}