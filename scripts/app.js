var buttonHeading = document.querySelector('button');
var myHeading = document.querySelector('h1');
var name = 'Alejandro Biancucci';


buttonHeading.addEventListener('click', () => {
    myHeading.textContent = 'Software Developer';
    buttonHeading.textContent = 'name';
    buttonHeading.onclick = () => {
        myHeading.textContent = name;
        buttonHeading.textContent = 'profession';
    }
});


