var down = document.getElementById("formList");

var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FirstName");
    FN.setAttribute("placeholder", "First Name");

var br = document.createElement("br"); 
    

var LN = document.createElement("input");
    LN.setAttribute("type", "text");
    LN.setAttribute("name", "LastName");
    LN.setAttribute("placeholder", "Last Name");

var br2 = document.createElement("br"); 

var zip = document.createElement("input");
    zip.setAttribute("type", "text");
    zip.setAttribute("name", "Zipcode");
    zip.setAttribute("placeholder", "Zip Code");

//var s = document.createElement("input");
  //  s.setAttribute("type", "submit");
    //s.setAttribute("value", "Submit");

var r = document.createElement("reset")
    r.setAttribute('type', "reset");
    r.setAttribute('value', "reset")

function submitFunction(){
    alert("Thank you for your submission!");
}


var br3 = document.createElement("br"); 

    form.appendChild(FN); 
    form.appendChild(br);
    form.appendChild(LN);
    form.appendChild(br2);
    form.appendChild(zip);
    form.appendChild(br3);
    //form.appendChild(s); 
    form.appendChild(r)
    document.getElementsByTagName("body")[0].appendChild(form);

   // document.getElementById('form').onsubmit = function () {
    //    alert(LN.innerHTML);
    //};