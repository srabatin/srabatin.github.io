let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/boulderplanet-logo.jpg') {
        myImage.setAttribute('src', 'images/boulderplanet-foto.jpg');
    } else {
        myImage.setAttribute('src', 'images/boulderplanet-logo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Boulderplanet Zeiten für ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Boulderplanet Zeiten für ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}