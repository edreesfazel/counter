var increaseButton = document.getElementById("increase-button");
var decreaseButton = document.getElementById("decrease-button");
/* var counter = document.getElementById("counter");*/

var counter = 0;

increaseButton.addEventListener("click", function(){
    counter++;
    document.getElementById("count").innerHTML = counter;
})

decreaseButton.addEventListener("click", function(){
    counter--;
    document.getElementById("count").innerHTML = counter;
})