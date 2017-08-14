var product = require('./product.js');

console.log("Console Log message from user.js ...");
document.getElementById("mycontainer").innerHTML = "<h3>user.js --> Webpack Application demonstrating multiple bundles - This is user page</h3>";

product.displayProduct();
