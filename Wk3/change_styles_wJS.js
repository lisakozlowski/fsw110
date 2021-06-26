var h2Loop= document.getElementById('headlineLoop')
for (var i=0; i<5; i++){
    var newLoop = document.createElement("li")
    newLoop.textContent="This is my headline loop!"
    newLoop.style.fontSize="20px"
    newLoop.style.fontWeight="lighter"
    newLoop.style.fontFamily="sans-serif"
    newLoop.style.color="cornflowerblue"
    h2Loop.append(newLoop)
}

headlineLoop.classList.add('border')