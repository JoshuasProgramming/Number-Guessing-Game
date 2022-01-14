/**
 * Number Guessing Game JavaScript File
 * author(Joshua Thomas)
 * date(11.01.2022)
 * version:1.0
 */

//Grabbing the elements
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');


//rand => random number is generated for user to guess
let rand = Math.floor(Math.random() * 100);

//counter for the amount of guesses the user has had
let noOfGuesses = 1;

//array list of the numbers the user has guessed
let guessedNumbers = [];

//variable that stores the prompt of the user's name
let name = prompt("Enter name");

//When user presses button...

/**
 * checks if user's input is equal to the random number 
 * checks if input is empty
 * checks if input is more than 100 or less than 0
 * checks if input is lower or higher than random number
 */
btn.addEventListener("click", (e)=>{
    if(input.value == rand){
        text1.innerText = "You Win " + name + "!!";
        text2.innerText = "The Number was " + rand;
        text3.innerText = "You guessed it in " + noOfGuesses + " attempts";
        
        text1.style.color = "#6e48aa";
        text2.style.color = "#6e48aa";
        text3.style.color = "#6e48aa";
    }
    
    else if(input.value == ""){
        alert("Guess a number");
    }
    
    else if(input.value > 100){
        alert("Number guessed should't exceed a value of 100");
    }
    
    else if(input.value < 0){
        alert("Number guessed should't exceed a value below 0");
    }
        
    else if(input.value < rand){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too low.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses += 1;
    }
    
    else if(input.value > rand){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too high.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses += 1;
    }
})