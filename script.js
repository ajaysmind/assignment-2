// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// reference to the grid table
table = document.getElementById("grid");

// Add a row -test
function addR() {
    let row = table.insertRow();
    numRows++;
    
    for (let i = 0; i < numCols; i++) {
        let cell = row.insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = function(){
            colorCell(this);
        };
    }
    
    // if adding the first row, initialize the columns
    if (numCols === 0) {
        let cell = row.insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = function(){
            colorCell(this);
        };
        numCols = 1;
    }
}

// Add a column
function addC() {
    numCols++;
    
    for (let i = 0; i < numRows; i++) {
        let row = table.rows[i];
        let cell = row.insertCell();
        cell.style.backgroundColor = "white";
        cell.onclick = function(){
            colorCell(this);
        };
    }
    
    // if no there are no rows, create a new row
    if (numRows === 0){
        addR();
    }
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        table.deleteRow(-1);
        numRows--;
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}