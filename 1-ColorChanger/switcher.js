const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);

    });

});
