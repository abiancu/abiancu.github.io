var btn = document.querySelector('button');
var heading = document.querySelector('h1');

btn.onclick = () => {
    if(heading.innerHTML === 'Alejandro Biancucci'){
        heading.innerHTML = 'Software Developer';
        btn.textContent = 'Name';
    }
    else{
        heading.innerHTML = 'Alejandro Biancucci';
        btn.textContent = 'Profession';
    }
}