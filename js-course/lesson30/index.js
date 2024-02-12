const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;

    guesses++;

    if(guess == 0){
        alert("Your guess must be a number between 1 - 10");
    }
    else if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses!`);
    }
    else if (guess < answer){
        alert("To small!");
    }
    else if (guess > answer) {
        alert("To large!");
    }
    else {
        alert(`${guess} is not a number!`);
    }
}