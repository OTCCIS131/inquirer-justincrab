const chalk = require('chalk');
var inquirer = require('inquirer');

let questions = [{
    type : "list",
    name : "sizeAnswer",
    message : "What size of 'za?",
    default: "XXL",
    choices : ["S", "M", "L", "XL", "XXL"], 
},
{
    //second question object
}];

inquirer.prompt([questions]).then(function (answers) {

});
console.log(inquirer.prompt([questions]));