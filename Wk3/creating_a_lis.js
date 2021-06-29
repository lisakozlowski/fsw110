var x=document.createElement('H1');
x.setAttribute("id", "greeting")
document.body.appendChild(x)


var h1Loop=document.getElementById('greeting');
for (var i=0; i<10; i++){
    var newLoop = document.createElement("h1")
    newLoop.textContent="Hello World"
    newLoop.style.color="purple"
    newLoop.style.fontFamily="sans-serif"
    h1Loop.append(newLoop)}

    
var z=document.createElement('ul');
z.setAttribute("id", "assignmentNames")
document.body.appendChild(z)


var names=[
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily"
]

var arrayLoop=document.getElementById("assignmentNames")
for (var i=0; i<names.length; i++){
    var newArray = document.createElement("li")
    newArray.textContent=names[i];
    arrayLoop.append(newArray)}
