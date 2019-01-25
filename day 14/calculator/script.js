const plusButtonEl = document.getElementById("plus-button");
const euqalsButtonEl = document.getElementById("equals-button");
const textFieldEl = document.getElementById("input-field");
const minusButtonEl = document.getElementById("minus-button");
// let input1 = null;

// const saveInputs = () => {
//     if (input1 === null){
//         let input1 = parseInt(textFieldEl.value);
//     } else {
//         let input2 = parseInt(textFieldEl.value);
//     }
    
// }
// plusButtonEl.onclick = saveInputs();
let number1 = 0;

const Calculate = () => {
    
}
const plus = () => {
    number2 = parseInt(textFieldEl.value);

    let answer = number1 + number2;
    textFieldEl.value = answer;
};
const equals = () => {
    let answer = number1 + parseInt(textFieldEl.value);
    textFieldEl.value = answer;
};
const minus = () => {
    let answer =  parseInt(textFieldEl.value); - 5
    textFieldEl.value = answer;
};
plusButtonEl.onclick = plus;
euqalsButtonEl.onclick = equals;
minusButtonEl.onclick = minus;

