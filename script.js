'use strict';
// reading HTML elements
let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let firstImEl = document.getElementById('firstIm');
let secondImEl = document.getElementById('secondIm');
let thirdImEl = document.getElementById('thirdIm');
let ulEl = document.getElementById('results');

let products = [];
let attempts = 1;
let maxAttempts = 25;
let productNames = [];
let votes = [];
let views = [];


// create object
function ProductImage(Name) {

    // split image from the path
    this.pName = Name.split('.')[0];
    this.img = 'img/' + Name;
    this.votes = 0;
    this.views = 0;
    products.push(this);
    productNames.push(this.pName)

}


// array for 19 images
let productImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

// put images inside function

for (let i = 0; i < productImages.length; i++) {
    new ProductImage(productImages[i])
}
// random index(0-18)




function randomIndex() {
    return Math.floor(Math.random() * products.length);
}

let firstIndex;
let secondIndex;
let thirdIndex;

function renderRandomImg() {
    // products.textContent = '';




    firstIndex = randomIndex();
    secondIndex = randomIndex();
    thirdIndex = randomIndex();

    while (firstIndex === secondIndex || firstIndex === thirdIndex) {
        firstIndex = randomIndex();
    }
    while (secondIndex === firstIndex || secondIndex === thirdIndex) {
        secondIndex = randomIndex();
    }





    firstImEl.setAttribute('src', products[firstIndex].img);
    secondImEl.setAttribute('src', products[secondIndex].img);
    thirdImEl.setAttribute('src', products[thirdIndex].img);

    firstImEl.setAttribute('alt', products[firstIndex].pName);
    secondImEl.setAttribute('alt', products[secondIndex].pName);
    thirdImEl.setAttribute('alt', products[thirdIndex].pName);


   

}

renderRandomImg();




firstImEl.addEventListener('click', handleClick);
secondImEl.addEventListener('click', handleClick);
thirdImEl.addEventListener('click', handleClick);

function handleClick(event) {
    if (attempts <= maxAttempts) {
        let clickedImg = event.target.id;
        if (clickedImg === 'firstIm') {
            products[firstIndex].votes++;
        }
        else if (clickedImg === 'secondIm') {
            products[secondIndex].votes++;

        } else if (clickedImg === 'thirdIm') {
            products[thirdIndex].votes++;
        }
        renderRandomImg();
    } else {
        let ulEl = document.getElementById('results');
        


        firstImEl.removeEventListener('click', handleClick);
        secondImEl.removeEventListener('click', handleClick);
        thirdImEl.removeEventListener('click', handleClick);
        chartRender();
    }
    attempts++;

}







