var currentNumberWrapper = document.getElementById("currentNumber"); //O proprio id currentNumber
var currentNumber = 0; //O valor

function increment(){

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement(){

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}