$( document ).ready(function() {
    console.log( "ready!" );

    
    $( "#target" ).click(function() {
        $('h1').css('color','red');
        $('.conteudo').html('<img src= "https://as2.ftcdn.net/jpg/02/09/09/93/500_F_209099377_2lvQz7gDP7UqibT2xhthTko9nSemQXLI.jpg" alt=" Ola">')
    });

});

// function butao(){
  
//   ('.conteudo').html('<img src= "none" alt=" Ola">')
 //   return .conteudo;
//}