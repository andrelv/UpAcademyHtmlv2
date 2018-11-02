$(document).ready(function () {
    console.log("Ready for Google Books!");

});

//classes
class Livro {
    constructor(id, img, titulo, autor, tipo, desc) {
        this.img = img;
        this.titulo = titulo;
        this.desc = desc;
        this.autor = autor;
        this.id = id;
        this.tipo = tipo;
    }
}

//vars
var listaLivros = [];


$("#pedelivros").click(getMeo);
$("#like").click(like);
$("#dismiss").click(dismiss);



function getMeo() {

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=search+terms",
        type: 'GET',
        //contentType: 'application/json',
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.items.length; i++) {
                var element = data.items[i];

                //console.log(element);
                if (element.volumeInfo.imageLinks == undefined) {
                    element.volumeInfo.imageLinks = "noimage.jpeg";
                }
                let book = new Livro(element.id, element.volumeInfo.imageLinks.thumbnail, element.volumeInfo.title, element.volumeInfo.authors,'categoria', element.volumeInfo.description);
               console.log(book)
                listaLivros.push(book);
            }

            $("#imglivro").attr("src",listaLivros[0].img);
            $("#titulolivro").html(listaLivros[0].titulo);
            $("#descricao").html("Descrição: " + listaLivros[0].desc);
            $("#autor").html("Escrito por: " + listaLivros[0].autor);


        }

    });
    console.log("lista carregada");

}

function like() {

}