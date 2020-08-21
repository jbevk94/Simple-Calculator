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
    if(num == "-"){ // Allow negative numbers
        return "";
    }
    
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
        if(this.id=="clear"){ //check if id is clear 
            printHistory("");
            printOutput("")
        }
        else if(this.id=="backspace"){ // remove commas from output by converting it to a string
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        } else{
            //declare values
            let output = getOutput();
            let history = getHistory();
            if (output==""&&history !=""){ //replace operator with last clicked
                if(isNaN(history[getHistory.length-1])){//check if clicked is operator
                    history = history.substr (0,history.length-1)//remove last character
                }
            }
            if(output !="" || history != ""){//check if output or history are empty
                output = output ==""? output: reverseNumberFormat(output);
                // Add output to history value
                history = history + output;
                if(this.id=="="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("")
                }
                else{
                    // Other operators get added to history & output is set to empty
                    history=history+this.id;
                    printHistory(history);
                    printOutput("")
                }
            }
        }
    })
}

// make numbers functional with click events
let number = document.getElementsByClassName("number");
for(let i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
    // remove commas on output
    let output = reverseNumberFormat(getOutput());
    if (output !=NaN){ //if output is a number
        output=output+this.id;
        printOutput(output)

    }
    
    })
}