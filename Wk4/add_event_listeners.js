var d=document.createElement('div');
d.setAttribute("id", "divBox")
d.style.backgroundColor="white"
d.style.width="700px"
d.style.height="700px"
document.body.appendChild(d)

window.addEventListener("load", function() {
    d.style.backgroundColor="black";
})

window.addEventListener("scroll", function(){
    d.style.backgroundColor="purple"
})

//window.onkeydown = function (b) {
  //  var code = 66 ? 66 : 66;
  //  if (code === 66) { 
   //  d.style.backgroundColor="blue";
   // }
//}

//window.onkeydown = function (r) {
  //  var code = 82 ? 82 : 82;
 //   if (code === 82) { 
  //   d.style.backgroundColor="red";
  //  }
//}

 //window.onkeypress = function (g) {
  //  var code = 71 ? 71 : 71;
  //  if (code === 71) { 
  //      d.style.backgroundColor="green";
  //  }
 //}

 //window.onkeypress = function (p) {
   // var code = 80 ? 80 : 80;
   // if (code === 80) { 
   //     d.style.backgroundColor="purple";
  //  }
// }

 //window.onkeypress = function (y) {
   // var code = 89 ? 89 : 89;
   // if (code === 89) { 
   //     d.style.backgroundColor="yellow";
  //  }
// }

var x=document.getElementById("divBox")
x.addEventListener("load", myFunction);
x.addEventListener("mouseover", secondFunction);
x.addEventListener("mousedown", thirdFunction);
x.addEventListener("mouseup", fourthFunction);
x.addEventListener("dblclick", fifthFunction);
x.addEventListener("scroll", sixthFunction);
x.addEventListener("onkeydown", seventhFunction);
        

function myFunction(){
 x.style.backgroundColor="black";
}

function secondFunction(){
    x.style.backgroundColor="green";
}

function thirdFunction(){
    x.style.backgroundColor="yellow";
}

function fourthFunction(){
    x.style.backgroundColor="blue";
}

function fifthFunction(){
    x.style.backgroundColor="red"   
}

function sixthFunction(){
    x.style.backgroundColor="purple"
}
