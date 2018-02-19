$(document).ready(function() {
    $("#mainBtn").click(function(){
        $("#modal-content").css({"display":"block"});
    });

    $("#xButton").click(function(){
        $("#modal-content").css({"display":"none"});
    })
});