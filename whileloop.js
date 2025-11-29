let input = require("prompt-sync")();

let continueProgram = "yes";
let food= [];

while(continueProgram == "yes"){
     let fooditems = input ("enter your grocery list:");
     food.push(fooditems);
     continueProgram = input( "do you want to continue:?")
}
    console.log(food);
    console.table(food);