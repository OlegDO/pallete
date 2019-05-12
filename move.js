let currentColor = '#ffffff';
let prevColor = '#ffffff';
const redColor = '#e83740';
const blueColor = '#4286f4';
const orangeColor = '#ed9a42';
const grayColor = '#a8a29c';
window.state = {
    currentTool: 'none'
};
//Declarations for shortcuts of tools
const load = document.querySelector('#load');
const save = document.querySelector('#save');
const head = document.querySelector('#reset');
//Colors
//Red
document.querySelector('#red-color').addEventListener('click', function() {
    prevColor = currentColor;
    $('#prev-container').css('background-color', prevColor);
    currentColor = redColor;
    $('#current-container').css('background-color', currentColor);
});
//Blue
document.querySelector('#blue-color').addEventListener('click', function() {
    prevColor = currentColor;
    $('#prev-container').css('background-color', prevColor);
    currentColor = blueColor;
    $('#current-container').css('background-color', currentColor);
});
//Orange
document.querySelector('#orange-color').addEventListener('click', function() {
    prevColor = currentColor;
    $('#prev-container').css('background-color', prevColor);
    currentColor = orangeColor;
    $('#current-container').css('background-color', currentColor);
});
//Gray
document.querySelector('#gray-color').addEventListener('click', function() {
    prevColor = currentColor;
    $('#prev-container').css('background-color', prevColor);
    currentColor = grayColor;
    $('#current-container').css('background-color', currentColor);
});
