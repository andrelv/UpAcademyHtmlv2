$(document).ready(function () {
    console.log("Ready!");
});

$("#btn").click(getMeo);

function getMeo(){
    $.ajax({
        url: "http://192.168.0.122:3000/health",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        }, 
        error: function(){
            console.log("Erro")
        }
    });
}

