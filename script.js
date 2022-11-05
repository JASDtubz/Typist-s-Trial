/* Version 2022.11.05.18.31 */

document.addEventListner('keydown', function(e) {
  if (e.keyCode == 37) {
    alert('Left was pressed');
  }
  else if (e.keyCode == 39) {
    alert('Right was pressed');
  }
});
