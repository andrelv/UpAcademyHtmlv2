$(document).ready(function () {
    console.log("Ready!");
    $("#tab1").hide();
    $("#tab2").hide();
    
    $("#input2").hide();
    $("#input3").hide();
    $("#input4").hide();
    $("#btn11").hide();

});

//------------------------- vars
//Produtos
var listaProdutos = [];
var discountValue = 0;
var iva = 0;
var pvp = 0;
var id = 0;

//Prateleiras
var capacity = 0;
var rentPrice = 0;
var productId = 0;
var id = 0;
var listaPrateleiras = [];

//outras
var s=false;
//----------------------------------

//------------ CLASSES
class Product {
    constructor(discountValue, iva, pvp, id) {
        this.discountValue = discountValue;
        this.iva = iva;
        this.pvp = pvp;
        this.id = id;
    }
}

class Shelf {
    constructor(capacity, rentPrice, id, productId) {
        this.capacity = capacity;
        this.rentPrice = rentPrice;
        this.id = id;
        this.productId = productId;
    }
}
//---------------------------------

//------------ BUTOES

$("#addprod").click(adicionarProducto);
$("#findprod").click(findProduct);
$("#upprod").click(upProduct);
$("#addshelf").click(addShelf);
$("#findshelf").click(findShelf);
$("#upshelf").click(upShelf);
$("#stock").click(limpar);

//--------------------------------

//----------- FUNCOES

function findProduct() {
    limpar();
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/products",
        type: 'GET',
        success: function (data) {
            //alert("Data: " + data +"\nStatus: " +status)
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var discountValue = data[i].discountValue;
                var iva = data[i].iva;
                var pvp = data[i].pvp;
                var id = data[i].id;
                var prod = new Product(discountValue, iva, pvp, id);
                console.log(prod);
                listaProdutos.push(prod);
                $("#tabelaprod").append(getRow(id, pvp,  discountValue, iva));
            }
            $("#tab2").hide();
            $("#tab1").show();
            $("#mostrarp").show();
            $("#mostrarp").html("Foram encntrados " +data.length+" Produtos");
        },
        error: function (result) {
            console.log(result);
        }
    });
}

function getRow(id, pvp, discountValue, iva) {

    return `<tr>
    <th scope="row">
    <input class="form-check-input" type="checkbox" id="checkbox1">
    <label class="form-check-label" for="checkbox1" class="label-table"></label>
</th>
    <td>${id}</td>
    <td>${pvp}</td>
    <td>${discountValue}</td>
    <td>${iva}</td>
    </tr>`;
}

function findShelf() {
limpar();
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'GET',
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {

                var capacity = data[i].capacity;
                var rentPrice = data[i].rentPrice;
                var productId = data[i].productId;
                var id = data[i].id;
                let prat = new Shelf(capacity, rentPrice, id, productId);
                listaPrateleiras.push(prat);
                //console.log(prat);
                $("#tabshelf").append(getRow1(id, productId, capacity, rentPrice));
            }
            $("#tab1").hide();
            $("#tab2").show();
            $("#mostrarp").show();
            $("#mostrarp").html("Foram encntradas " +data.length+" Prateleiras");
            //mostrar();
        },
        error: function (result) {
            console.log(result)
        }
    });
}

function getRow1(id, productId, capacity, rentPrice) {
    
        return `<tr>
        <th scope="row">
        <input class="form-check-input" type="checkbox" id="checkbox2">
        <label class="form-check-label" for="checkbox2" class="label-table"></label>
    </th>
        <td>${id}</td>
        <td>${productId}</td>
        <td>${capacity}</td>
        <td>${rentPrice}</td>
        </tr>`;
    }

function adicionarProducto() {
    s = false;
    limpar();
    apareceipt();
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/",
        type: 'POST',
        contentType: 'application/json',
        success: function (factura) {
            console.log(factura);
        },
        error: function (err) {
            console.log(err)
        }
    });
}

function apareceipt(){
    if (s == true){
        
        $("#input2").attr("placeholder", "Prod ID");
        $("#input3").attr("placeholder", "Tamanho");
        $("#input4").attr("placeholder", "Preço");
    } else {
        
        $("#input2").attr("placeholder", "PVP");
        $("#input3").attr("placeholder", "Desconto");
        $("#input4").attr("placeholder", "IVA");
    }
    
    $("#input2").show();
    $("#input3").show();
    $("#input4").show();
    $("#btn11").show();
}

function upProduct() { }

function addShelf() { 
s = true;
limpar();
apareceipt();
}

function upShelf() { }

function limpar(){
    $("#tab1").hide();
    $("#tab2").hide();
    
    $("#input2").hide();
    $("#input3").hide();
    $("#input4").hide();
    $("#btn11").hide();
    $("#mostrarp").hide();
}