
let element = document.getElementById("menu");

element.addEventListener("click",function(){
    let ul = document.querySelector("#list1");
  if(ul.style.display == "none"){
    
    ul.style.display = "block";
   ul.style.animation= 'all 2s ease-out';
  }else{
    ul.style.display = "none";
    
  }

  



});
