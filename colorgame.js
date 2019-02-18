var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   numSquares = 3;

   //generate only 3 new colors when the easy button is clicked on
   colors = generateRandomColors(numSquares)
   //picking random color for easy mode 
   pickedColor = pickColor();

   colorDisplay.textContent = pickedColor;
   
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       } else {
           //hiding the bottom 3 squares 
           squares[i].style.display = "none";
       }
   }
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


// Reset button 
resetButton.addEventListener("click", function(){
  
    //generate new colors 
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //changing colors of our squares 
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue"
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //adding colors to our squares
    squares[i].style.backgroundColor = colors[i];

    //click listeners
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;

       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again?";
       }else {
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again!";
       }
    });
}

function changeColors(color){
    //looping through all squares
    for (var i=0; i < squares.length; i++) {
        //changing each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

//this function is picking a random color in our colors array
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
    return "rgb("+ r + ", " + g + ", " + b + ")";

}

