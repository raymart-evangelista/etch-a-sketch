document.body.style.backgroundColor = 'brown';

// reference the grid container from the html file
const gridContainer = document.querySelector('#gridContainer');


// determine number of squares which will also determine the number of rows
const numToSquare = 16;
const amtSquares = numToSquare ** 2;
const amtRows = Math.sqrt(amtSquares);

// declare and intialize an array of squares and fill it with zeros
// let squares = new Array(amtSquares).fill(0);

// outer for loop will be used to create rows
// for (i = 0; i < amtRows; i++) {

//     const rowContainer = document.createElement('div');
//     rowContainer.className = 'row';
//     gridContainer.appendChild(rowContainer);


//     // inner forEach loop will be used to create the squares (divs)
//     for (j = 0; j < amtRows; j++) {
//         const div = document.createElement('div');
//         div.className = 'grid';
//         div.style.backgroundColor = 'white';
//         div.textContent = 'Hello';
//         rowContainer.appendChild(div);
//     }

// }


//squares.forEach(function(square) {
//
//});


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
alert(squares.length);

squares.forEach((square) => {
    square.addEventListener('mouseover', function (e) {
        e.target.style.background = 'blue';
    });
});