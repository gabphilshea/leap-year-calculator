//JavaScript code for Leap Year Calculator

//Function that evaluates the inputted year
function checkYear() {
    const input = document.getElementById('yearInput').value;
    
    if (input.length === 4){

        const year = parseInt(input);
        const result = isLeapYear(year);
        const details = resultDetails(year);
        
        document.getElementById('resultLabel').textContent = result;
        document.getElementById('resultDetail').textContent = details;
        
    } 
    
}

//Function for determining if input qualifies for a leap year or not
function isLeapYear(number){
  if (number % 400 === 0){
    return `${number} is a leap year.`;
  } else if (number % 100 === 0){
      return `${number} is not a leap year.`;
  } else if (number % 4 === 0){
    return `${number} is a leap year.`;
  } else {
      return `${number} is not a leap year.`;
  }
}


//Function for printing out additional information/details regarding the year
function resultDetails(number){
  if (number % 400 === 0){
    return `February ${number} has 29 days. The year has 366 days.`;
  } else if (number % 100 === 0){
      return `February ${number} only has 28 days. The year has 365 days.`;
  } else if (number % 4 === 0){
    return `February ${number} has 29 days. The year has 366 days.`;
  } else {
      return `February ${number} only has 28 days. The year has 365 days.`;
  }
}

//Function for numeric keypad
function pressKey(num) {
    const input = document.getElementById('yearInput');
    if (input.value.length < 4) {     // limits to 4 digits
        input.value += num;
    }
}

//Function for erase key in the numeric keypad
function eraseKey() {
    const input = document.getElementById('yearInput');
    input.value = input.value.slice(0, -1);   // removes last digit
}