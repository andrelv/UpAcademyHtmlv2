$(document).ready(function () {
    console.log("Ready for Google Books!");
    $("#card").hide();
    //$("#cabecatabela").hide();
    //$("#tabela").hide();
    //$("#pyro").hide();

});

//classes
class Livro {
    constructor(id, img, titulo, autor, tipo, desc, like, dislike) {
        this.img = img;
        this.titulo = titulo;
        this.desc = desc;
        this.autor = autor;
        this.id = id;
        this.tipo = tipo;
        this.like = like;
        this.dislike = dislike;
    }
}

//vars
var listaLivros = [];
var listaLikes = [];
var contLikes = 0;
var cont = 0;
var letra1 = "";
//var element = 0;


$("#pedelivros").click(getMeo);
$("#like").click(like);
$("#dismiss").click(dismiss);
$("#likes").click(mostraLivros);



function getMeo() {
    $("#cabecatabela").hide();
    $("#card").show();
    var nr = $('#ipt1').val();
    letra();
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + letra1 + "&maxResults=" + nr + "&startIndex=" + (listaLivros.length + 1),
        type: 'GET',
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.items.length; i++) {
                var element = data.items[i];

                if (element.volumeInfo.imageLinks == undefined) {
                    element.volumeInfo.imageLinks = "noimage.jpeg";
                }
                if (element.volumeInfo.description == undefined) {
                    element.volumeInfo.description = "Livro sem descrição para apresentar";
                }
                let book = new Livro(element.id, element.volumeInfo.imageLinks.thumbnail, element.volumeInfo.title, element.volumeInfo.authors, 'categoria', element.volumeInfo.description, 0, 0);
                console.log(book)
                listaLivros.push(book);
            }
            mostrar();
        }

    });
    console.log("lista carregada");

}

function letra() {

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 2; i++)
        letra1 = possible.charAt(Math.floor(Math.random() * possible.length));

    return letra1;

}

function mostrar() {
    
    if (listaLivros.length > 0) {
        $("#card").show();
    }
    if (cont == listaLivros.length) {
        $("#card").hide();
        alert("A lista de livros terminou, solicite mais ou veja quais os Livros com Like");
    }
    else {
        $("#imglivro").attr("src", listaLivros[cont].img);
        $("#titulolivro").html(listaLivros[cont].titulo);
        $("#descricao").html("Descrição: " + listaLivros[cont].desc);
        $("#autor").html("Escrito por: " + listaLivros[cont].autor);
    }
}

function like() {
                                                                                                                                                              
    ebook = listaLivros[cont];
    ebook.like++;
    contLikes++; //para mostrar o nr de likes dados
    tabela();
    $("#likes").html("Livros com Likes: " +contLikes);
    mostrar();
}

function dismiss() {
    ebook = listaLivros[cont];
    ebook.dislike++;
    cont++;
    mostrar();
}

function tabela(){
    //var id = listaLivros[cont].id;
    var titulo=listaLivros[cont].titulo;
    var autor=listaLivros[cont].autor;
    var lk = listaLivros[cont].like;
    listaLikes.push(titulo, autor);
    for (i=0; i > contLikes; i++){
        if (listaLikes[contLikes] == listaLikes[i]){
            lk++;
        }
    }
    $("#tabela").append(getRow(titulo, autor, lk));
    cont++;
}

function mostraLivros() {
    console.log('entou');
    $("#cabecatabela").css("display", "block");
   // $("#cabecatabela").show();
    //$("#tabela").show();

}

function getRow(titulo, autor, lk) {
    
        return `<tr>
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${lk}</td>
        </tr>`;
    }
