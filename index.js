const numButtons = document.querySelectorAll('.numbers');
const numDisplay = document.querySelector('.display.display');
const eraseButton = document.querySelector('.display.erase');
const goButton = document.querySelector('.display.go');
const tableData = document.getElementsByTagName("td");
const header = document.querySelector('.header-title');
var numData = 0;
var correctPositionData = 2;
var correctNumData = 1;
var countOfCorrectNum = 0;
var countOfCorrectPositions = 0;

var randomNum = "";
var digits = "123456789";

for (var i = 0; i < 4; i++) {
  var index = Math.floor(Math.random() * digits.length);
  var digit = digits.charAt(index);
  
  if (randomNum.indexOf(digit) === -1) {
    randomNum += digit;
  } else {
    i--;
  }
}



var randomNumber = randomNum.toString();
for (var i = 0; i < numButtons.length; i++) {

    (function(index) {
      numButtons[index].addEventListener("click", function() {
        if (numDisplay.value.length <= 3){
            numDisplay.value = numDisplay.value + numButtons[index].innerHTML;
        }
      });
  
    })(i);
  }

eraseButton.addEventListener("click", function(){
    
    numDisplay.value = numDisplay.value.slice(0,-1);
})

goButton.addEventListener("click", function(){
  tableData[numData].textContent = numDisplay.value;
  numData = numData + 3;
  inputNum = numDisplay.value.toString();
  for (var i = 0; i < randomNumber.length; i++) {
    if (inputNum.indexOf(randomNumber[i]) !== -1) {
      countOfCorrectNum++;
    }
    if (inputNum[i] === randomNumber[i]){
      countOfCorrectPositions++;
    }
  }
  
  tableData[correctNumData].textContent = countOfCorrectNum;
  tableData[correctPositionData].textContent = countOfCorrectPositions;
  if (countOfCorrectNum === 4 && countOfCorrectPositions === 4) {
    header.innerHTML = "You Won!";
  
    setTimeout(function() {
      
      location.reload();
    }, 2000); 
  }
  correctNumData = correctNumData + 3;
  countOfCorrectNum = 0;
  
  
  correctPositionData = correctPositionData + 3;
  countOfCorrectPositions = 0;
  numDisplay.value = "";
  
})