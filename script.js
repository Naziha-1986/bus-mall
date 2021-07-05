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



// create object
function ProductImage(Name) {
    // split image from the path
    this.pName = Name.split('.')[0];
    this.img = 'img/' + Name;
    this.votes = 0;
    this.views = 0;
    products.push(this);

}


// array for 19 images
let productImages =['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];

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

    firstIndex = randomIndex();
     secondIndex = randomIndex();
     thirdIndex = randomIndex();
    while (firstIndex === secondIndex || firstIndex === thirdIndex) {
        firstIndex = randomIndex();
    }





    firstImEl.setAttribute('scr', products[firstIndex].img);
    secondImEl.setAttribute('scr', products[secondIndex].img);
    thirdImEl.setAttribute('scr', products[thirdIndex].img);

    firstImEl.setAttribute('alt', products[firstIndex].pName);
    secondImEl.setAttribute('alt', products[secondIndex].pName);
    thirdImEl.setAttribute('alt', products[thirdIndex].pName);


    products[firstIndex].views++;
    products[secondIndex].views++;
    products[thirdIndex].views++;


}



// lab12 add chart

function chartRender(){
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

chartRender();
