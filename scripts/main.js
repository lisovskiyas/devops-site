var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/devopsloop.png') {
      myImage.setAttribute ('src','images/devops2.png');
    } else {
      myImage.setAttribute ('src','images/devopsloop.png');
    }
}

