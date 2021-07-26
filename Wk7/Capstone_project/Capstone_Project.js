const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var listItem = document.createElement("li");

    var inputValue = document.getElementById("addNewTask").value; 
    var inputValue2 = document.getElementById("addNewTask2").value; 

    var text = document.createTextNode(inputValue); 
    var newText = document.createTextNode(" - "); 
    var newText2 = document.createTextNode(inputValue2); 

    listItem.appendChild(text); 
    listItem.appendChild(newText);
    listItem.appendChild(newText2);

    var deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton); 

    document.getElementById("unorderedList").appendChild(listItem); 

    deleteButton.onclick = function() {
        var listAddedItem = inputValue2;

        listItem.style.display = "none";
        total -= parseFloat(listAddedItem);
    }

    document.getElementById("myForm").reset();
});