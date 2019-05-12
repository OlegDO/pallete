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
