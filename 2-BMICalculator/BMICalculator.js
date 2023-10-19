const form = document.querySelector('form')

// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid Height ${height}`;

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const BMI = (weight / ((height * height / 1000)).toFixed(2));

        // Result Show
        results.innerHTML = `<span>${BMI}</span>`
    }
})