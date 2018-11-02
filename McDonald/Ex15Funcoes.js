
function main() {
    facturar();
    // location.reload();
}

function inserir() {
    // console.log(guardarPedido.length+1);
    if (($('#ipt2').val() != "") && ($('#ipt1').val() != "")) {
        var nomeArt = $('#ipt2').val();
        var extra = $('#ipt3').val();
        let temp = new pedido(nomeArt, extra);
        prodTemp.push(temp);
        //console.log(temp);
        $("#cabecatabela").css("display", "inline-table")
        $("#tabela").append(getRow(nomeArt, extra));
        $("#ipt2").val('');
        $("#ipt3").val('');
        //console.log('Entrou')
        enviar = true;


    } else {
        alert("Nao foi inserido nenhum artigo ou nome!! ");
    }
}

function getRow(nomeArt, extra) {

    return `<tr>
    <td>${nomeArt}</td>
    <td>${extra}</td>
    </tr>`;
}

function facturar() {
    //clik++;
    console.log(enviar)
    if (enviar === true) {
        var nome = $('#ipt1').val();
        var fact = new factura(nome, prodTemp);
        console.log(fact);
        Nfact = JSON.stringify(fact);
        factList.push(Nfact);
        alert(Nfact);
        //Limpeza
        $("#ipt1").val('');
        $("#ipt2").val('');
        $("#ipt3").val('');
        prodTemp = [];
        enviar = false;
        // factlist.push(Nfact);
        // $("#txt").text(JSON.stringify(fact));
        // $("#txt").text("O pedido numero " + pedido.id + " com o nome" +pedido.nome +" é" +pedido.pedido +" com o extra" +pedido.extra);
    } else {

        alert("Nao foi inserido nenhum artigo ou nome!! ");
    }
}

function registo() {
    // console.log(factList);
    let factGlobal = JSON.stringify(Nfact);
   // alert (factGlobal);
   // for (i = 0; i < factList.length - 1; i++){
    // factList1 = JSON.stringify(factList);
    //   $("txt").text(factGlobal);
    getMeo(factGlobal);
}


function getMeo(factGlobal) {
    console.log("factGlobal",factGlobal);
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'GET',
        success: function (data, status) {
            //alert("Data: " + data +"\nStatus: " +status)
            console.log("ola")
            console.log("GET" +factGlobal);
            $.ajax({
                url: "http://192.168.0.122:3000/api/orders",
                type: 'POST',
                contentType: 'application/json',
                data: Nfact,
                success: function (factura) {
                    console.log(factura);
                }, 
                error: function(err){
                    console.log(err)
                }
            });    
        },
        error: function (result) {
            console.log(result)
        }
    });





}

