//get history value
function getHistory() {
  return document.getElementById("history-value").innerText;
}
// print history value
function printHistory(num) {
  return (document.getElementById("history-value").innerText = num);
}
// get output function
function getOutput() {
  return document.getElementById("output-value").innerText;
}

// get print function
function printOutput(num) {
  // Clear the numbers
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

// format the number with commas

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

// reverse formatting
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}

// make operators functional with click events
let operator = document.getElementsByClassName("operator");
for(let i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        alert("Clicked" +this.id)
    })
}