let currentColor = '#1c1b1b';
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
        prevColor = currentColor;
        $('#prev-container').css('background-color', prevColor);
        currentColor = color || 'none';
        $('#current-container').css('background-color', currentColor);
    }
};
//Events perfomance-->
paintBucket.addEventListener('click', () => {
    window.state.currentTool = 'paint-bucket';
});
paintBucket.addEventListener('click', paint);
//Transform
transform.addEventListener('click', () => {
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

    transform.removeEventListener('click', trans);
    transform.classList.remove('high-list');
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
                if (window.state.currentTool === 'paint-bucket') {
                    $(this).css('background-color', currentColor);
                }
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
            window.state.currentTool = 'transform';
            $('.item').on('click', function() {
                if (window.state.currentTool === 'transform') {
                    if ($(this).hasClass('square')) {
                        $(this).removeClass('square');
                        $(this).addClass('circle');
                    } else {
                        $(this).removeClass('circle');
                        $(this).addClass('square');
                    }
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
        window.state.currentTool = 'color-picker';
        $('.pick').on('click', function() {
            if (window.state.currentTool === 'color-picker') {
                let color = $(this).css('background-color');
                prevColor = currentColor;
                $('#prev-container').css('background-color', prevColor);
                currentColor = color || 'none';
                $('#current-container').css('background-color', currentColor);
            }
        });
    }
});
//Local Storage--->
save.addEventListener('click', () => {
    const shapeNowItem00 = $('.item-00').attr('class');
    const shapeNowItem01 = $('.item-01').attr('class');
    const shapeNowItem02 = $('.item-02').attr('class');
    const shapeNowItem10 = $('.item-10').attr('class');
    const shapeNowItem11 = $('.item-11').attr('class');
    const shapeNowItem12 = $('.item-12').attr('class');
    const shapeNowItem20 = $('.item-20').attr('class');
    const shapeNowItem21 = $('.item-21').attr('class');
    const shapeNowItem22 = $('.item-22').attr('class');

    //First line items properties
    const colorNowItem00 = $('#item-00').css('background-color');
    localStorage.setItem('item-00-color', JSON.stringify(colorNowItem00));
    localStorage.setItem('item-00-shape', JSON.stringify(shapeNowItem00));
    const colorNowItem01 = $('#item-01').css('background-color');
    localStorage.setItem('item-01-color', JSON.stringify(colorNowItem01));
    localStorage.setItem('item-01-shape', JSON.stringify(shapeNowItem01));
    const colorNowItem02 = $('#item-02').css('background-color');
    localStorage.setItem('item-02-color', JSON.stringify(colorNowItem02));
    localStorage.setItem('item-02-shape', JSON.stringify(shapeNowItem02));

    //Second line items properties
    const colorNowItem10 = $('#item-10').css('background-color');
    localStorage.setItem('item-10-color', JSON.stringify(colorNowItem10));
    localStorage.setItem('item-10-shape', JSON.stringify(shapeNowItem10));
    const colorNowItem11 = $('#item-11 ').css('background-color');
    localStorage.setItem('item-11-color', JSON.stringify(colorNowItem11 ));
    localStorage.setItem('item-11-shape', JSON.stringify(shapeNowItem11));
    const colorNowItem12 = $('#item-12').css('background-color');
    localStorage.setItem('item-12-color', JSON.stringify(colorNowItem12));
    localStorage.setItem('item-12-shape', JSON.stringify(shapeNowItem12));

    //Third line items properties
    const colorNowItem20 = $('#item-20').css('background-color');
    localStorage.setItem('item-20-color', JSON.stringify(colorNowItem20));
    localStorage.setItem('item-20-shape', JSON.stringify(shapeNowItem20));
    const colorNowItem21 = $('#item-21').css('background-color');
    localStorage.setItem('item-21-color', JSON.stringify(colorNowItem21));
    localStorage.setItem('item-21-shape', JSON.stringify(shapeNowItem21));
    const colorNowItem22 = $('#item-22').css('background-color');
    localStorage.setItem('item-22-color', JSON.stringify(colorNowItem22));
    localStorage.setItem('item-22-shape', JSON.stringify(shapeNowItem22));
});

load.addEventListener('click', () => {
    //Color
    const getColorItem00 = JSON.parse(localStorage.getItem('item-00-color'));
    $('#item-00').css('background-color', getColorItem00);
    const getColorItem01 = JSON.parse(localStorage.getItem('item-01-color'));
    $('#item-01').css('background-color', getColorItem01);
    const getColorItem02= JSON.parse(localStorage.getItem('item-02-color'));
    $('#item-02').css('background-color', getColorItem02);

    const getColorItem10 = JSON.parse(localStorage.getItem('item-10-color'));
    $('#item-10').css('background-color', getColorItem10);
    const getColorItem11 = JSON.parse(localStorage.getItem('item-11-color'));
    $('#item-11').css('background-color', getColorItem11);
    const getColorItem12 = JSON.parse(localStorage.getItem('item-12-color'));
    $('#item-12').css('background-color', getColorItem12);

    const getColorItem20 = JSON.parse(localStorage.getItem('item-20 -color'));
    $('#item-20 ').css('background-color', getColorItem20 );
    const getColorItem21 = JSON.parse(localStorage.getItem('item-21-color'));
    $('#item-21').css('background-color', getColorItem21);
    const getColorItem22 = JSON.parse(localStorage.getItem('item-22-color'));
    $('#item-22').css('background-color', getColorItem22);

    //Shape
    const getShapeItem00 = JSON.parse(localStorage.getItem('item-00-shape'));
    $('.item-00').attr('class', getShapeItem00 );
    const getShapeItem01 = JSON.parse(localStorage.getItem('item-01-shape'));
    $('.item-01').attr('class', getShapeItem01 );
    const getShapeItem02 = JSON.parse(localStorage.getItem('item-02-shape'));
    $('.item-02').attr('class', getShapeItem02 );

    const getShapeItem20 = JSON.parse(localStorage.getItem('item-20-shape'));
    $('.item-20').attr('class', getShapeItem20 );
    const getShapeItem21 = JSON.parse(localStorage.getItem('item-21-shape'));
    $('.item-21').attr('class', getShapeItem21 );
    const getShapeItem22 = JSON.parse(localStorage.getItem('item-22-shape'));
    $('.item-22').attr('class', getShapeItem22 );

    const getShapeItem10 = JSON.parse(localStorage.getItem('item-10-shape'));
    $('.item-10').attr('class', getShapeItem10 );
    const getShapeItem11 = JSON.parse(localStorage.getItem('item-11-shape'));
    $('.item-11').attr('class', getShapeItem11 );
    const getShapeItem12 = JSON.parse(localStorage.getItem('item-12-shape'));
    $('.item-12 ').attr('class', getShapeItem12  );
});
