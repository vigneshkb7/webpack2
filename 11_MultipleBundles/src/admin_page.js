var product = require('./product.js');

console.log("Console Log message from admin.js ...");
document.getElementById("mycontainer").innerHTML = "<h3>admin.js --> Webpack Application demonstrating multiple bundles - This is admin page</h3>";

product.displayProduct();
