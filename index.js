/* Program: Inquirer Pizza Order-er
   Developer:   Justin Crabtree
   Date:        9.20.17
   Purpose:     Simple app for ordering pizzas.
                User is asked a series of questions
                then asked to confirm their order
                which determines the output message */
const chalk = require('chalk');
var inquirer = require('inquirer');

let questions = [{
    type : "list",
    name : "sizeAnswer",
    message : "What size of 'za?",
    default: "XXL",
    choices : ["S", "M", "L", "XL", "XXL"]
},
{
    type : "list",
    name : "crustAnswer",
    message : "What kind of crust you want brev?",
    default: "Stuffed Crust",
    choices : ["\nHand-Tossed", "Stuffed Crust", "Thin", "Chicago"]
},
{
    type: "checkbox",
    name: "toppingsAnswer",
    message: "What kinda toppings u dig fam?",
    default: "Cheese",
    choices: [" Cheese", " Pepperonni", " Canadian Bacon", " Sausage", " Green Peppers", " Shrooms", " Olives"]

}];
// another question object had to be defined with another inquirer used below
let question2 = [{
    type: "confirm",
    name: "confirm",
    message: "Is this lookin good my G?",
}]
console.log(chalk.red("Welcome to Cosmo Pizza Pizzagate Express\nYou will be asked a series of questions, \nuse your up/down arrows and enter to complete your order!"));
inquirer.prompt(questions).then(function (answers) {
    console.log(chalk.bgMagenta("Size: "+answers.sizeAnswer));
    console.log(chalk.bgCyan("Crust: "+answers.crustAnswer));
    console.log(chalk.bgGreen("Toppings: "+answers.toppingsAnswer));
    //notice the tucked inquirer prompt here
    inquirer.prompt(question2).then(function (answers2){
        if (answers2.confirm === true)
            console.log("It's on it's way!");
        else
            console.log("Sorry for the inconvenience, honey boo boo");
    });
});
