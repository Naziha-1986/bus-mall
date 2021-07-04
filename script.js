'use strict';
// reading HTML elements
let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let firstImEl = document.getElementById('firstIm');
let secondImEl = document.getElementById('secondIm');
let thirdImEl = document.getElementById('thirdIm');
let ulEl = document.getElementById('results');

 let products = [];
// let attempts = 1;
// let maxAttempts = 25;


// create object
function ProductImage(Name) {
    // split image from the path
    this.pName = Name.split('.')[0];
    this.img = 'img/' + Name;
    this.vote = 0;
    this.view = 0;
    products.push(this);

}



// array for 19 objects
let productImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breskfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
// put images inside function

for (let i = 0; i < productImages.length; i++) {
    new ProductImage(productImages[i]);
}
// random index(0-1)
function randomIndex() {
    return Math.floor(Math.random() * products.length);
}
function renderRandomImg(){


    firstImEl.setAttribute('scr', products[0].img);
    secondImEl.setAttribute('scr', products[1].img);
    thirdImEl.setAttribute('scr', products[2].img);

    // firstImEl.setAttribute('alt', products[ firstIndex].pName);
    // secondImEl.setAttribute('alt', products[secondIndex].pName);
    // thirdImEl.setAttribute('alt', products[thirdIndex].pName);


    // products[firstIndex].view++;
    // products[secondIndex].view++;
    // products[thirdIndex].view++;


}

renderRandomImg();
