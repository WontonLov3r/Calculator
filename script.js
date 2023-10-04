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
console.log(newVal);    
    }
    


function equalButPress() {

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

