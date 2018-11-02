$(document).ready(function () {
    console.log("Ready!");

});

//vars
var enviar = false;
var prodTemp = [];
// factGlobal
var factList= [];

$("form").submit(function(e) {
    e.preventDefault();
});
//accoes dos butoes
$("#btn2").click(inserir);
$("#btn1").click(main);
$("#btn3").click(registo);