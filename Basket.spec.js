const assertEquals = require("../test-framework");
const Basket = require("../src/Basket");

//let input = ["Bagel1",'Bagel2','Bagel3']; 
//let expectedOutput = ["Bagel1",'Bagel2','Bagel3'];
//console.log(assertEquals(addItem(input),expectedOutput));

let basket;
basket = new Basket();
let input = "Bagel1";
let expectedOutput = ["Bagel1"];
console.log(`Testing that [${input}] => [${expectedOutput}]`);
console.log(assertEquals(basket.add(input),expectedOutput));
