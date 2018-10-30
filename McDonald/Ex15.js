$(document).ready(function () {
    console.log("Ready!");

});

//vars
var enviar = false;
var facturatemp = [];
var factGlobal;
$("form").submit(function(e) {
    e.preventDefault();
});
//accoes dos butoes
$("#btn2").click(inserir);
$("#btn1").click(main);