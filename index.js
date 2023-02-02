
// For detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;


        makingSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);

            });
    }

// For detecting keyboard press

document.addEventListener("keydown", function(event){

    makingSound(event.key);
    buttonAnimation(event.key);

});

function makingSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML)
    

}

}

function buttonAnimation(currentKey){
    var activateButton = document.querySelector("." + currentKey);

    activateButton.classList.add("pressed");

    setTimeout(function(){
        activateButton.classList.remove("pressed");
    }, 100 );
}







/*
A quick detour in the google chrome browser - Side project

function add(num1, num2){
    return num1 + num2;
}
undefined
function subtract(num1, num2){
    return num1 - num2;
}
undefined
function multiply(num1, num2){
    return num1 * num2;
}
undefined
function divide(num1, num2){
    return num1 / num2;
}
undefined
function calculator (num1, num2, operation){
    return operation(num1, num2);
}
undefined

calculator(6,3,subtract);
3

calculator(50,50,multiply);
2500

calculator(50,3,divide)
16.666666666666668

calculator(3.14,3.14,multiply);
9.8596

calculator(51,59,add);
110

*/
