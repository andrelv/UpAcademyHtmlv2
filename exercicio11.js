
function ler() {
    // var tam=[];
    var x = document.getElementById("nr").value;
    // var conversao = x.split("");
    document.getElementById("result").innerHTML = "Ordem: " + ordem(x);
    // document.getElementById("result").innerHTML = "Ordem: " + conversao;
    
}


function ordem(tamanho) {
    console.log(typeof tamanho);

    var conversao = tamanho.split("");
    var ordem = "";
    var i = 0;
    var y = 0;

    for (i = 0; i < conversao.length - 1; i++) {
        console.log("index for " + i);
        console.log(conversao[i]);
        console.log(conversao[i + 1]);
        for (y = 0; y < conversao.length - 1; y++) {
            if (conversao[y] < conversao[y + 1]) {
                //[tamanho[i],tamanho[i+1]]=[tamanho[i+1],tamanho[i]];
                console.log("Entrou");
                ordem = conversao[y + 1];
                conversao[y + 1] = conversao[y];
                conversao[y] = ordem;
            }
        }
    }
    alert(conversao);
    return conversao;
    
}