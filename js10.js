function texto() {
    var x = document.getElementById("txt").value;
    var y = document.getElementById("txt2").value;
    document.getElementById("result").innerHTML = "O texto1 tem " + novo(x) + " espacos";
    document.getElementById("result2").innerHTML = "O texto2 tem " + novo(y) + " espacos";

}

function novo(contador) {
    var cont = 0;
    for (i = 0; i < contador.length; i++) {
        if (contador[i] === " ") {
            cont++;
        }
    }
    return cont;
}