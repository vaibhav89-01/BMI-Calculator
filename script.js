const bmiForm = document.getElementById('bmiForm');

bmiForm.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Invalid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Invalid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});
