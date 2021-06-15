var x = document.createElement("A");
  var t = document.createTextNode(" Google ");
  x.setAttribute("href", "https://google.com");
  x.appendChild(t);
  document.body.appendChild(x);

  var y = document.createElement("A");
  var t2 = document.createTextNode(" Facebook ");
  y.setAttribute("href", "https://www.facebook.com");
  y.appendChild(t2);
  document.body.appendChild(y);

  var z = document.createElement("A");
  var t3 = document.createTextNode(" Tutorials ");
  z.setAttribute("href", "https://www.w3schools.com");
  z.appendChild(t3);
  document.body.appendChild(z);

  var newH1 =document.createElement('H1')
newH1.textContent='Welcome to my JavaScript Website'
document.body.appendChild(newH1)

var newP =document.createElement('p')
newP.textContent='This is the first paragraph'
document.body.appendChild(newP)

var newListItem =document.createElement('li')
newListItem.textContent ='First'
document.body.appendChild(newListItem)

var secondListItem = document.createElement('li')
secondListItem.textContent ='Second'
document.body.appendChild(secondListItem)

var thirdListItem = document.createElement('li')
thirdListItem.textContent ='Third'
document.body.appendChild(thirdListItem)

var footer = document.createElement("FOOTER");
footer.textContent="Footer"
document.body.appendChild(footer);