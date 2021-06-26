var h1Loop= document.getElementById('headlineLoop')
for (var i=0; i<10; i++){
    var newHeadline = document.createElement("li")
    newHeadline.textContent="This is my headline loop!"
    newHeadline.style.color="blue"
    newHeadline.style.fontFamily="sans-serif"
    h1Loop.append(newHeadline)
}

var assignmentNames = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily"
]

var arrayLoop= document.getElementById('assignment')
for (var i=0; i<assignmentNames.length; i++){
    var newArray = document.createElement("li")
    newArray.textContent=assignmentNames[i]
    arrayLoop.append(newArray)
}