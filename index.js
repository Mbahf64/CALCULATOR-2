const display = document.querySelector(".display"); //this line selects the display area of the calculator
const buttons = document.querySelectorAll("button"); // this line selectsall the button of the calculator
const specialChars = ["%", "*", "/", "-", "+", "="]; // in this line an array is created to list all the special charaters used in calculations
let output = ""; // this variable is going to be used to keep track of the current input or the result of calculations


const calculate = (btnValue) => { 
    // This makes sure the calculator display is ready for you to type.
    display.focus(); // focus is like making sure the display is ready to show whatever is typed on the calculator.
  
    // If you press "=" and there's something on the display, it does math!
    if (btnValue === "=" && output !== "") {
      // If there's a "%" on the display, it turns it into a number for you.
  
      output = eval(output.replace("%", "/100")); //the `replace` method is used here, to replace '%' with '/100'
    } 
    
    // If you press "AC," it clears everything you wrote or calculated.
    else if (btnValue === "AC") {
      output = "";
    } 
    
    else if (btnValue === "DEL") {
      // If you press "DEL," it erases everything at once.
      output = "";
    } 
    
    // For other buttons (numbers and stuff), it adds them to what you wrote.
    else {
      // If you haven't written anything and press an operator, it doesn't do anything.
      if (output === "" && specialChars.includes(btnValue)) return;
      // Otherwise, it adds the button you pressed to what's already on the display.
      output += btnValue;
    }
    
    // After doing all this, it shows you the updated result on the calculator display!
    display.value = output;
  }; 
  // This special function helps the calculator work when you press buttons.

buttons.forEach((button) => { //The .forEach is a way to go through each item in a list (like an array) and perform some action on each item.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}); //this function helps tell the calculator what to do when you click on any of its buttons.