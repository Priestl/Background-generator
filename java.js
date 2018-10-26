 var css=document.querySelector("h3");
 var color1=document.querySelector(".color1");
 var color2=document.querySelector(".color2");
 var gradient=document.getElementById("gradient");

 function gradientcolor(){
 	gradient.style.background="linear-gradient(to left,"
 	 + color1.value
 	  + ", " 
 	  +  color2.value 
 	  +")";
 	  css.textContent=gradient.style.background +";";
 }

 color1.addEventListener("input", gradientcolor);
 	
 

 color2.addEventListener("input", gradientcolor);
 	

 	