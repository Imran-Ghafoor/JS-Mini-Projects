console.log(imran);
const clock = document.getElementById('clock');
// const cock = document.querySelector('clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
    // console.log(clock);
}, 1000);