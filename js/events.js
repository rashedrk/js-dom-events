// option 2 : add onclick function 
function makeRed() {
    document.body.style.backgroundColor= 'red';
}

// Option 3 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue ;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 3 another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}

// option 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

// option 4 final
document.getElementById('make-goldenrod').addEventListener('click',function () {
    document.body.style.backgroundColor = 'goldenrod';
})