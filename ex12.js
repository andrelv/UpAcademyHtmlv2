function ler() {

    var x = document.getElementById("nr").value;

    document.getElementById("result").innerHTML = "Numeros: " + tratamento(x);
}

function tratamento(num) {


    var conversao = num.split("");
    var ordem = "";
    //var i = 0;
    var y = 0;

    // for (i = 0; i < conversao.length - 1; i++) {
    for (y = 0; y < conversao.length - 1; y++) {
        if (conversao[y] % 2 == 0 && conversao[y + 1] % 2 == 0) {
            // ordem = conversao[y + 1];
            conversao[y] = conversao[y] +"*";
            // conversao[y + 2] = ordem;
        } if ((conversao[y] % 2 != 0 && conversao[y + 1] % 2 != 0)) {
          //  ordem = conversao[y + 1];
            conversao[y] = conversao[y] +"#";
          //  conversao[y + 2] = ordem;

        }
        

    }
    // }

    return conversao;
}