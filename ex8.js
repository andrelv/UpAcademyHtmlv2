
function mostrar() {
    // var num1= prompt("De um numero");
    // num1= parseInt(num1);
    // var resultado= num1 + 10;
    // alert("Welcome. . . ." +resultado);
    var input1 = document.getElementById("ipt1").value;
    console.log(input1);
    document.getElementById("result").innerHTML = input1;
    //alert("Li:"+input1);
    //document.getElementById("btn1").style.display = "none";
    var x = document.getElementsByClassName("btn11");
    // x[0].style.display="none";
    //  console.log(x);

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("tit").style.color = "green";
}
// mostrar();
function texto() {
    var x = document.getElementById("txt").value;
    var y = document.getElementById("txt2").value;
    var cont = 0;
    var cont2 = 0;
    console.log(x);
    console.log(y);
    for (i = 0; i < x.length || i<y.lenght; i++) {
        if (x[i] === " ") {
            cont++;
        } else if(y[i]===" "){
            cont2++;
        }
    }

    document.getElementById("result").innerHTML = "O texto1 tem " + cont + " espacos";
    document.getElementById("result2").innerHTML = "O texto2 tem " + cont2 + " espacos";
}
// function texto2() {
 //   var x = document.getElementById("txt2").value;
 //   var cont = 0;
 //   console.log(x);
 //   for (i = 0; i < x.length; i++) {
  //      if (x[i] === " ") {
  //          cont++;
 //      }
  //  }

  //  document.getElementById("result2").innerHTML = "O texto tem " + cont + " espacos";
//}