var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/devopsloop.png') {
      myImage.setAttribute ('src','images/devops2.png');
    } else {
      myImage.setAttribute ('src','images/devopsloop.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'DevOps is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'DevOps is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}