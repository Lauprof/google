
let element = document.getElementById("menu");

element.addEventListener("click",function(){
    let ul = document.querySelector("#list1");
  if(ul.style.display == "none"){
    
    ul.style.display = "block";
  }else{
    ul.style.display = "none";
    
  }

  



});
