let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
//Store whether or not decimal was clicked
//only allow one decimal per value
let decimalClicked = false

//Hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {

}

function equalButPress() {

}

//clears everything except memory 
function clearButPress() {
    preVal = ''
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
    if(valMemStored) {
        document.getElementById('entry').value = valMemStored
        newVal = ValMemStored 
    }
}

