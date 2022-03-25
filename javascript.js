document.body.style.backgroundColor = 'brown';

// reference the grid container from the html file
const gridContainer = document.querySelector('#gridContainer');


// determine number of squares which will also determine the number of rows
const amtSquares = 3 ** 2;
const amtRows = Math.sqrt(amtSquares);

// declare and intialize an array of squares and fill it with zeros
// let squares = new Array(amtSquares).fill(0);

// outer for loop will be used to create rows
for (i = 0; i < amtRows; i++) {

    const rowContainer = document.createElement('div');
    gridContainer.appendChild(rowContainer);


    // inner forEach loop will be used to create the squares (divs)
    for (j = 0; j < amtRows; j++) {
        const div = document.createElement('div');
        div.className = 'grid';
        div.style.backgroundColor = 'white';
        div.textContent = 'Hello';
        rowContainer.appendChild(div);
    }

}


//squares.forEach(function(square) {
//
//});


