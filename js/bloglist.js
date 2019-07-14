
// var modal= document.getElementById('id03');

// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
// }

// var modal= document.getElementById('id04');

// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = "none";
// }
// }



$(document).ready(function(){
    for(var x=1;x<6;x++){
    $("#myBtn"+x).click(function(){
      $("#myModal").modal();
    });
}
  });

  
  
  