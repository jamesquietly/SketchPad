gridSize = 16;
gridLimit = 50;

//adds rows with grids into div with id=grid
function createGrid(size) {
    for (var i = 0; i < size; i++) {
        $('#grid').append('<div id=\"row' + i +'\" class=\"row\"> </div>');
        for (var j = 0; j < size; j++) {
            $('#row' + i).append("<div class=\"grid\"></div>");
        }
    }
}

//calls mouseenter to draw on grids
function turnOnDraw() {
    $('.grid').mouseenter(function() {
        $(this).addClass('colored');
    });
}

//removes grid and creates a new one
function clearGrid(){
    $('#grid').empty();
    createGrid(gridSize);
    $('.grid').height(960/gridSize);
    $('.grid').width(960/gridSize);
    turnOnDraw();
}

//creates a new grid with specified dimensions
//limited to values between 1 and gridLimit
function changeDimensions() {
    var sizeInput = prompt("Enter new grid size between 1-" + gridLimit);
    newSize = parseInt(sizeInput);
    if (isNaN(newSize)) {
        return ;
    }
    else {
        if (newSize > 0 && newSize < gridLimit + 1) {
            gridSize = newSize;
            clearGrid();
        }
    }
}

//change the fill in color of grid to a random color
function randomColor() {
    var colors = ['red', 'blue', 'black', 'orange', 'purple', 'green', 'yellow'];
    var index = Math.floor(Math.random() * colors.length);
    if ($('#newStyle').length) {
        $('#newStyle').empty();
        $('#newStyle').append('.colored {background-color: ' + colors[index] + ';}');
    }
    else {
        $('head').append($('<style/>', {id: 'newStyle', html: '.colored { background-color: ' + colors[index] + ';}'}));
    }
}

$(document).ready(function() {
    createGrid(gridSize);
    turnOnDraw();

});