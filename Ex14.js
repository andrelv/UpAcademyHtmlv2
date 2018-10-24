$(document).ready(function () {
    $("#btn1").click(function () {
        var nralunos = parseInt( $('#input1').val());
        $("#p1").remove();
        for (i = 0; i > nralunos; i++) {
            $("#txt").text("Insira a nota do " +i +" aluno");


        }
            // escreve para inserir a nota
            // document.getElementById("txt").innerHTML = "Indique a nota do " + i + " aluno";
        });
        //$('h1').css('color','red');
        //$('.conteudo').html('<img src= "https://as2.ftcdn.net/jpg/02/09/09/93/500_F_209099377_2lvQz7gDP7UqibT2xhthTko9nSemQXLI.jpg" alt=" Ola">')
    });

   // function ler() {
        //recebe o valor 
      //  var x = document.getElementById("input1").value;
       // for (i = 0; i = x; i++) {

            //escreve para inserir a nota
        //    document.getElementById("txt").innerHTML = "Indique a nota do " +i +" aluno";
    //    }
   // }

   // function alunos(num) {

  //  }