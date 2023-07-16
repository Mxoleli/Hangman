/*
Project: Hangman
Author: Mxoleli Cwati
*/

//*************Project starts************//

import inquirer from 'inquirer';
import data from './data.js';

const [words, state] = data;
const guessedLetters = [];
const word = words[Math.floor(Math.random() * words.length)]; //I need to handle empty array
let guessesRemaining = 10;

/*
    Asking for user input method
*/
const askForLetter = () => {
    inquirer.prompt([{
        name: 'letter',
        type: 'input',
        message: 'Guess a letter:',
        validate(value){
            if(/^[A-Za-z]$/.test(value)){
                return true;
            }else{
                return false;
            }
        }
    }]).then (input =>{
        // The main logic of the game will go here
      
    });

}

console.log('Welcome to Hangman!');
console.log('___________________');

askForLetter();