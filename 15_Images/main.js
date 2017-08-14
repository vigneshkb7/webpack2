require('./css/app.css');

console.log("Console Log message from main.js ...");
document.getElementById("mycontainer").innerHTML = "<h1>Webpack Application demonstrating use of Images</h1>";

var img = document.createElement('img');
img.style.height = "20%";
img.style.width = "20%";
img.src = require('./images/nature.jpg');

document.getElementById('image_container').appendChild(img);
