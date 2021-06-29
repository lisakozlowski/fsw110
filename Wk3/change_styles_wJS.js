var x=document.createElement('H2');
x.setAttribute("id", "headline")
document.body.appendChild(x)




var h2Loop= document.getElementById('headline')
for (var i=0; i<5; i++){
    var newLoop = document.createElement("h2")
    newLoop.textContent="This is my headline loop!"
    newLoop.style.fontSize="20px"
    newLoop.style.fontWeight="lighter"
    newLoop.style.fontFamily="sans-serif"
    newLoop.style.color="cornflowerblue"
    h2Loop.append(newLoop)
}

h2Loop.classList.add('border')