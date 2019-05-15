let currentColor = '#ffffff';
let prevColor = '#ffffff';
const redColor = '#e83740';
const blueColor = '#4286f4';
const orangeColor = '#ed9a42';
const grayColor = '#a8a29c';
window.state = {
    currentTool: 'none'
};
//Declarations for shortcuts of tools-->
const load = document.querySelector('#load');
const save = document.querySelector('#save');
const head = document.querySelector('#reset');
const paintBucket = document.querySelector('#paint-bucket');
const transform = document.querySelector('#transform');
const colorPick = document.querySelector('#color-picker');
//Functions declaration-->
const paint = function() {
    if (window.state.currentTool === 'paint-bucket') {
        paintBucket.classList.add('high-list');
        $('.item').on('click', paintFig);
    }
};
const paintFig = function () {
    if (window.state.currentTool === 'paint-bucket') {
        $(this).css('background-color', currentColor);
    }
};
//Transform
const trans = function() {
    if (window.state.currentTool === 'transform') {
        transform.classList.add('high-list');
        $('.item').on('click', transFig);
    }
};
const transFig = function () {
    if (window.state.currentTool === 'transform') {
        if ($(this).hasClass('square')) {
            $(this).removeClass('square');
            $(this).addClass('circle');
        } else {
            $(this).removeClass('circle');
            $(this).addClass('square');
        }
    }
};
//Color picker
const colorPickEl = function() {
    if (window.state.currentTool === 'color-picker') {
        colorPick.classList.add('high-list');
        $('.pick').on('click', colorPickElFig);
    }
};
const colorPickElFig = function() {
    if (window.state.currentTool === 'color-picker') {
        let color = $(this).css('background-color');
        console.log(color);
        prevColor = currentColor;
        $('#prev-container').css('background-color', prevColor);
        currentColor = color || 'none';
        $('#current-container').css('background-color', currentColor);
    }
}
//Events perfomance-->
paintBucket.addEventListener('click', function() {
    window.state.currentTool = 'paint-bucket';
});
paintBucket.addEventListener('click', paint);
//Transform
transform.addEventListener('click', function() {
    window.state.currentTool = 'transform';
});
transform.addEventListener('click', trans);
//Choose Color
colorPick.addEventListener('click', () => {
    window.state.currentTool = 'color-picker';
});
colorPick.addEventListener('click', colorPickEl);
//Colors-->
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
//Reset--->
head.addEventListener('click', function() {
    window.state.currentTool = 'none';
    paintBucket.removeEventListener('click', paintFig);
    paintBucket.classList.remove('high-list');

    colorPick.removeEventListener('click', colorPickEl);
    colorPick.classList.remove('high-list');

    transform.classList.remove('high-list');
    transform.removeEventListener('click', trans);
    // $('.item').off('click', paint)
    // $(window).off('click');
});
//Shortcuts--->
//Paint bucket
window.addEventListener(
    'keypress',
    e => {
        if (e.keyCode === 112) {
            window.state.currentTool = 'paint-bucket';
            paintBucket.classList.add('high-list');
            $('.item').on('click', function() {
                $(this).css('background-color', currentColor);
            });
        }
    },
    false
);

//Transform
window.addEventListener(
    'keypress',
    e => {
        if (e.keyCode === 116) {
            transform.classList.add('high-list');
            $('.item').on('click', function() {
                if ($(this).hasClass('square')) {
                    $(this).removeClass('square');
                    $(this).addClass('circle');
                } else {
                    $(this).removeClass('circle');
                    $(this).addClass('square');
                }
            });
        }
    },
    false
);

//Color picker
window.addEventListener('keypress', e => {
    if (e.keyCode === 99) {
        colorPick.classList.add('high-list');
        $('.pick').on('click', function() {
            let color = $(this).css('background-color');
            prevColor = currentColor;
            $('#prev-container').css('background-color', prevColor);
            currentColor = color || 'none';
            $('#current-container').css('background-color', currentColor);
        });
    }
});
