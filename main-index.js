$(document).ready(function(){
    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function(){
        var x = $("div.topnav");
        x.toggleClass("responsive");
    });//toggleButton onclick 
});//end document ready
