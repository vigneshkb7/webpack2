var product = require('./product');

console.log("Console Log message from main.js ...");
document.getElementById("mycontainer").innerHTML = "<h1>Webpack Application demonstrating Loaders</h1>";

product.displayProduct();
