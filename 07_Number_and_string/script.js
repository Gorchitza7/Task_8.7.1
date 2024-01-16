let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

// Кнопка с цифрой 1
document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
//кнопка 1
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';  
})
//
document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';  
})
//
document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if(operation === 'def'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})
//код обнуления калькулятора
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

