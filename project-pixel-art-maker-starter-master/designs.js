// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
const gridHeight = $('#input_height').val();//get grid Height
const gridWidth = $('#input_width').val();//get grid Width
const grid = $('#pixel_canvas'); //define grid

grid.children().remove();//Clear canvas

//Create grid  (with a "while" and a "for" loop...)
  let i = 1;
  while (i <= gridHeight) {
    grid.append( "<tr></tr>" );
    for (let i = 1; i <= gridWidth; i++) {
      grid.children().last().append("<td></td>");
    }
    i++;
  }
}
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").click(function(event) {
  event.preventDefault();
  makeGrid();

  //Switch off (right-click) contextmenu
$("td").contextmenu(function() {
  return false;
});


  //Listening to mouse, define right and left click and set color
    $("td").mousedown(function(click) {
      switch (click.which) {
        case 1:
          $(this).css("background-color", document.getElementById("colorPicker").value);
          break;
        default:
          $(this).css("background-color", "white");
          break;
      }
    });
  });
