var calScreen = document.querySelector(".screen");
var numberofCalButtons = document.querySelectorAll(".typer").length;

var firstNumber = "";
var secondNumber = "";
var operation = "";

for (var i = 0; i < numberofCalButtons; i++) {
    document.querySelectorAll(".typer")[i].addEventListener("click", function () {

        if (calScreen.innerText === "0") {
            calScreen.innerText = this.innerText;
        } else {
            calScreen.innerText = calScreen.innerText + this.innerText;
        }

    });
}

var numberOfOperators = document.querySelectorAll(".operator").length;

for (var i = 0; i < numberOfOperators; i++) {

    document.querySelectorAll(".operator")[i].addEventListener("click", function () {

        firstNumber = calScreen.innerText;
        operation = this.innerText;

        calScreen.innerText = "0";

    });

}

document.querySelector(".equals").addEventListener("click", function () {

    secondNumber = calScreen.innerText;

    if (operation === "+") {
    calScreen.innerText = Number(firstNumber) + Number(secondNumber);
   }

    if (operation === "-") {
    calScreen.innerText = Number(firstNumber) - Number(secondNumber);
    }

    if (operation === "×") {
    calScreen.innerText = Number(firstNumber) * Number(secondNumber);
    }

    if (operation === "÷") {
    calScreen.innerText = Number(firstNumber) / Number(secondNumber);
    }

});

var clearScreen = document.querySelector(".clear").addEventListener("click", function(){
    calScreen.innerText = "0";
    firstNumber="";
    secondNumber="";
    operation="";
});

document.querySelector(".delete").addEventListener("click", function() {
    calScreen.innerText =
    calScreen.innerText.slice(0,-1);

    if (calScreen.innerText === "") {
        calScreen.innerText = "0";
    }
})
