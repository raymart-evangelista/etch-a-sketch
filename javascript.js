document.body.style.backgroundColor = 'brown';

// reference the options container
const optContainer = document.querySelector('#optContainer');
// reference the grid container from the html file
const gridContainer = document.querySelector('#gridContainer');



const eraseGridButton = document.createElement('button');
eraseGridButton.textContent = 'Erase All';
optContainer.appendChild(eraseGridButton);

// determine number of squares which will also determine the number of rows
const numToSquare = 6;
const amtSquares = numToSquare ** 2;

// use a for loop to create grid squares and put them onto the web page
for (i = 0; i < amtSquares; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    gridContainer.appendChild(div);
}

// use flexbasis to align squares on webpage
//let percentageOfContainerWidth = (100 / numToSquare) - 1;
// document.getElementsByClassName('square').style.flexBasis = `${percentageOfContainerWidth}%`;

let squares = document.querySelectorAll('.square');

// flexBasis calculation
gridCalculation = 100 / numToSquare;


squares.forEach((square) => {
    square.addEventListener('mouseover', function (e) {
        e.target.style.background = 'blue';

        // erase color after certain amount of time
        setTimeout(function() {
            // e.target.style.background = '';
          }, 500);

    });

    square.style.flexBasis = `${gridCalculation}%`;

});


