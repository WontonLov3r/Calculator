let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
//Store whether or not decimal was clicked
//only allow one decimal per value
let decimalClicked = false

//Hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    if (resultVal) {
        //Start a new number
        newVal = num
        //reset to create a new result 
        resultVal = '' 
    } else {
        //used to block multiple decimals
        if (num === '.') {
            if (decimalClicked != true) {
                //Take current value of newVal and add the character pressed
                newVal += num
                //sets decimal check var to true, wont allow here
                decimalClicked = true
            } 
         } else {
                newVal += num
            }
               

        }
//update the display
document.getElementById('entry').value = newVal 
    }
    
function mathButPress(operator) {
    //Check if there was a previous calculation
    //by seeing if resultVal has a value 
    //If result doesnt have a value then store
    //the current val as a previous for the next calculation 
    if(!resultVal) {
        prevVal = newVal
    }
    else {
        //if there is a current result store that as the previous value entered
        prevVal = resultVal
    }
    //restart creation of new number
    newVal = ''
    //Store operator clicked
    decimalClicked = false
    mathOperator = operator
    //Prepare entry for receiving new numbers
    resultVal = ''
    document.getElementById('entry').value =''
}

function equalButPress() {
    //Reset Decimal Clicked
    decimalClicked = false
    //Connect string numbers to float
    prevVal = parseFloat(prevVal)
    newVal = parseFloat(newVal) 

    //Preform calculations based on stored operator
    switch (mathOperator) {
        case '+':
            resultVal = prevVal + newVal
            break
        case '-':
            resultVal = prevVal - newVal
            break
        case '*':
            resultVal = prevVal * newVal
            break
        case '/':
            resultVal = prevVal / newVal
            break

    default:
        resultVal = newVal
    }
    //Store the current value as the previous so that I can accept to the next value in the calculation
prevVal = newVal
document.getElementById('entry').value = resultVal
console.log(resultVal);
console.log("pressed");
}

//clears everything except memory 
function clearButPress() {
    prevVal = ''
    newVal = ''
    resultVal = ''
    mathOperator = ''
    decimalClicked = false
    document.getElementById('entry').value = '0'
}

//store the current value in #entry in valMemStored
function copyButPress() {
    valMemStored = document.getElementById('entry').value
}

//If a value has been stored paste it in the #entry window and assign its as the newVal
function pasteButPress() {
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}

