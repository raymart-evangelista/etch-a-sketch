// reference the options container
const optContainer = document.querySelector('#optContainer');
// reference the grid container from the html file
const gridContainer = document.querySelector('#gridContainer');


///////////////////////////////
// Creating Buttons         ///
///////////////////////////////
const eraseGridButton = document.createElement('button');
eraseGridButton.textContent = 'Erase All';
optContainer.appendChild(eraseGridButton);

// When the Erase All button is clicked, the grid becomes blank
eraseGridButton.addEventListener('click', function() {
    removeGrid();
    createSquareDivs(numToSquare);
    createGrid(numToSquare);
});


///////////////////////////////
// Creating Grid Size Slider //
///////////////////////////////
const gridSizeSlider = document.getElementById('gridRange');
const sliderValue = document.getElementById('sliderValue');
sliderValue.textContent = `${gridSizeSlider.value} * ${gridSizeSlider.value}`;

// When value on slider changes, update web page text and grid
gridSizeSlider.oninput = function() {
    sliderValue.textContent = `${this.value} * ${this.value}`;
    //numToSquare = this.value;
    if(numToSquare !== this.value) {
        numToSquare = this.value;
        console.log(`new numToSquare: ${numToSquare}`);

        // update gridSize
        removeGrid();
        createSquareDivs(numToSquare);
        createGrid(numToSquare);

    }
}

function removeGrid() {

    // remove old elements and recreate grid
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove()
    })

}

function createSquareDivs(numToSquare) {

    amtSquares = numToSquare ** 2;
    // use a for loop to create grid squares and put them onto the web page
    for (i = 0; i < amtSquares; i++) {
        let div = document.createElement('div');
        div.className = 'square';
        gridContainer.appendChild(div);
    }
    
}

function createGrid(numToSquare) {

    // flexBasis calculation
    gridCalculation = 100 / numToSquare;


    let squares = document.querySelectorAll('.square');
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
}

// initialize starting values and create starting grid
let numToSquare = 16;
let amtSquares = numToSquare ** 2;
createSquareDivs(numToSquare);
createGrid(numToSquare);