$(document).ready(function () {
    console.log("Ready!");
});

//vars
var nrAlunos = 0;
var clik = 0;
var nota;
var vecNota = [];
var media=0;
var x=0;
var desv=0;

$("#input1").keyup(function(event) {
    if (event.keyCode === 13) {
        main();
    }
});
function main() {
   //$("input").focus();
   //$("input").val("");
   clik++;
   NRalunos();
   tabalunos();
   mat();
}

$("#btn1").click(main);

function NRalunos() {
    if(clik==1){
    nrAlunos = parseInt($('#input1').val());
    }

    $("#txt").text("Insira a nota do " + clik + " aluno");
}


function tabalunos() {
   
  if (clik <= nrAlunos+1) {
        if (clik > 1) {
            nota = parseInt($('#input1').val());
            $("#tabela").append(getRow(clik - 1, nota));     
      }
    }
}

function getRow(numeroAluno, notaAluno) {
media += notaAluno;
    return `<tr>
    <td>${numeroAluno}</td>
    <td>${notaAluno}</td>
</tr>`;
}
        
function mat(){
 if(clik>= nrAlunos+1){
     $("#txt").text("Insira a nota de referencia ");
     x= parseInt($('#input1').val());
 }

 if (clik >= nrAlunos+2){
    media = (media/nrAlunos);
    desv = ((media-x)/media)*100;
    $("#txt").text("A média da turma é de " + media + " valores e o  desvio e: " +desv);
    console.log(media);
 }
}