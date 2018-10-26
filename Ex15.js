$(document).ready(function () {
    console.log("Ready!");

});

//vars
var pedido = {
    id: "",
    nome: "",
    pedido: [
        {
            nomeart: "",
            extra: ""
        },
        {
            nome: "",
            extra: ""
        }
    ]
};
var clik = 0;
var guardarPedido = [];


$("#btn1").click(main);

function main() {
    inserir();
    mostrar();
    //clik++;
}

function inserir() {
    // console.log(guardarPedido.length+1);
    pedido.id = guardarPedido.length + 1;
    pedido.nome = $('#ipt1').val();
    pedido.pedido = $('#ipt2').val();
    pedido.extra = $('#ipt3').val();
    console.log(pedido);
    guardarPedido.push(pedido);
    console.log(guardarPedido);
}

function mostrar() {
    // if (clik>0){
    $("#txt").text(guardarPedido);
    // $("#txt").text("O pedido numero " + pedido.id + " com o nome" +pedido.nome +" é" +pedido.pedido +" com o extra" +pedido.extra);
    //  }
}