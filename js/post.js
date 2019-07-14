
 function editInputField(){
    
    document.getElementById("blogBody").readOnly = false;
 
  
  
}

var Clicks = 1 ;
function likebtn(el){
    
    
  
    if ( el.value === "Like" ){
        el.value = "Liked!";
        
        document.getElementById('lbtn').innerHTML =  Clicks + " person liked this!";
        Clicks = Clicks + 1;    
    }
        
    else
        el.value = "Like";   
}

function getwords() {
    text = comment.value;
    document.getElementById("para").innerHTML += '<p>'+text;
    document.getElementById("comment").value = "leave a comment here"
}

var editBtn = document.getElementById('editBtn');
var editables = document.querySelectorAll('#content,#blogTitleNew')
 
editBtn.addEventListener('click', function(e) {
  if (!editables[0].isContentEditable) {
    editables[0].contentEditable = 'true';
    editables[1].contentEditable = 'true';
    editBtn.innerHTML = 'Save';
    editBtn.style.backgroundColor = 'red';
  } else {
    
    editables[0].contentEditable = 'false';
    editables[1].contentEditable = 'false';
    
    // Change Button Text and Color
    editBtn.innerHTML = '<span> <i style="font-size:24px" class="fa">&#xf044;</i></span>' +'Edit';
    editBtn.style.backgroundColor = 'red';
    // Save the data in localStorage 
    for (var i = 0; i < editables.length; i++) {
      localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
    }
  }
});
