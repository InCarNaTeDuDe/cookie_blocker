function handleCookieModal(){
  var element = document.body;
  
  if(element.hasChildNodes()){
   element.childNodes.forEach(function(node){
     if(node.textContent.includes("cookies") && node.nodeName === "DIV"){
      node.remove()
     }
   })
  }
 }
 
 window.addEventListener("load", handleCookieModal)