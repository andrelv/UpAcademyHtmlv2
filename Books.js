$(document).ready(function () {
    console.log("Ready for Google Books!");
    $("#card").hide();

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
var disLikes = [];
var cont = 0;
var letra1 = "";


$("#pedelivros").click(getMeo);
$("#like").click(like);
$("#dismiss").click(dismiss);



function getMeo() {
    var nr = $('#ipt1').val();
    letra();
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" +letra1 + "&maxResults=" + nr + "&startIndex=" + (listaLivros.length + 1),
        type: 'GET',
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.items.length; i++) {
                var element = data.items[i];

                if (element.volumeInfo.imageLinks == undefined) {
                    element.volumeInfo.imageLinks = "noimage.jpeg";
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
    
    $("#imglivro").attr("src", listaLivros[cont].img);
    $("#titulolivro").html(listaLivros[cont].titulo);
    $("#descricao").html("Descrição: " + listaLivros[cont].desc);
    $("#autor").html("Escrito por: " + listaLivros[cont].autor);
    if (listaLivros.length>0){
        $("#card").show();}

}

function like() {
    ebook = listaLivros[cont];
    ebook.like++;
    listaLikes.push(ebook);
    cont++;
    
    // $.ajax({
    //     url: "https://www.googleapis.com/books/v1/volumes?q=search+terms",
    //     type: 'POST',
    //     contentType: 'application/json',
    //     success: function (data) {
    //         listaLivros[cont].like
    //     }, 
    //     error: function(err){
    //         console.log(err)
    //     }
    // });   
    mostrar();
}

function dismiss() {
    ebook = listaLivros[cont];
    ebook.dislike++;
    listadisLikes.push(ebook);

    cont++;
    mostrar();
}