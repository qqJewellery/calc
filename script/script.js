const input = document.querySelector('.calculator__input');

function adding(num) {
    return input.value += num;
}

function equal() {
    input.value = eval(input.value);
}

function cleanInput() {
    input.value = '';
}