import inquirer from "inquirer";

let randomNumber  = Math.floor( Math.random()*10)

for (let i = 0; i < 3 ; i ++){
let guess = await inquirer.prompt({
    type : 'input',
    name : 'userguess',
    message : 'Guess the random number'
})

if (guess.userguess === randomNumber){
    console.log('Correct guess');
    
} else { console.log('wrong guess');
}}