var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    //click listeners
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;

       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(clickedColor);
       }else {
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again!";
       }
    });
}

function changeColors(color){
    for (var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        //pushing the random color into our array
        arr.push(randomColor())

    }
    return arr;
}

//function for creating random color 
function randomColor() {
    //generating a number for red between 0 - 255
    var r = Math.floor(Math.random() * 256)
    //generating a number for green between 0 - 255
    var g = Math.floor(Math.random() * 256)
    //generating a number for blue between 0 - 255
    var b = Math.floor(Math.random() * 256)
    //returning the numbers in rgb format
    return "rgb("+ r + "," + g + "," + b + ")";

}

