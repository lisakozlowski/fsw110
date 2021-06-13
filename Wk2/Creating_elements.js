var newH1 =document.createElement('H1')
newH1.textContent='Welcome to my JS Site'
document.body.appendChild(newH1)

var newP=document.createElement('p')
newP.textContent="All this was created with Javascript"
document.body.appendChild(newP)

var x = document.createElement("OL");
x.setAttribute("id", "myOl");
document.body.appendChild(x);

var l1 = document.createElement("LI");
var t1 = document.createTextNode("List Item 1");
l1.appendChild(t1);
document.getElementById("myOl").appendChild(l1);

var l2 = document.createElement("LI");
var t2 = document.createTextNode("List Item 2");
l2.appendChild(t2);
document.getElementById("myOl").appendChild(l2);

var l3 = document.createElement("LI");
var t3 = document.createTextNode("List Item 3");
l3.appendChild(t3);
document.getElementById("myOl").appendChild(l3);
