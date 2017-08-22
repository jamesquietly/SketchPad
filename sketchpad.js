$(document).ready(function() {
    var gridSize = 16;
    createGrid(gridSize);
});

function createGrid(size) {
    for (var i = 0; i < size; i++) {
        $('#grid').append('<div id=\"row' + i +'\" class=\"row\"> </div>');
        for (var j = 0; j < size; j++) {
            $('#row' + i).append("<div class=\"grid\"></div>");
        }
    }
}