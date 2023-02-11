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