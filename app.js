$(function(){
    var bars = document.getElementById("bars")
    $("#bars").click(function(){
        $("#box1").slideToggle("slow");
           bars.classList.toggle("change")
    })
})