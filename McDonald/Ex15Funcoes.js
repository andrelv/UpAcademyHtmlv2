
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
        facturatemp.push(temp);
        //console.log(temp);
        $("#cabecatabela").css("display","inline-table")
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
        var fact = new factura(nome, facturatemp);
        console.log(fact);
        factGlobal = fact;
        $("#txt").text(JSON.stringify(fact));
        // $("#txt").text("O pedido numero " + pedido.id + " com o nome" +pedido.nome +" é" +pedido.pedido +" com o extra" +pedido.extra);
    } else {
        
        alert("Nao foi inserido nenhum artigo ou nome!! ");
    }
}