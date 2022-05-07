let bar=document.querySelector(".bar");
let i = document.getElementById("hide")
let active= document.querySelector(".show");
bar.addEventListener("click", function(){
 active.classList.toggle("show")
 active.classList.toggle("hide")
 
 
})
