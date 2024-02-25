const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const rateDisplay = document.getElementById('rate')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let score = 0
let plays = 0
let rate = 0.0
//generate computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // or you can use choices.length
    //console.log(randomNumber)
    computerChoice = choices[randomNumber].id
    computerChoiceDisplay.innerHTML = computerChoice
}





choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        //compare the two choices to decide who is the winner
        if (userChoice === computerChoice) {
            result = "It\'s a draw!"
            plays++
        }
        if (computerChoice == 'rock' && userChoice == 'paper') {
            result = "Congratulations! You win!"
            score++
            plays++
        }
        if (computerChoice == 'scissors' && userChoice == 'rock') {
            result = "Congratulations! You win!"
            score++
            plays++
        }
        if (computerChoice == 'paper' && userChoice == 'scissors') {
            result = "Congratulations! You win!"
            score++
            plays++
        }
        if (computerChoice == 'paper' && userChoice == 'rock') {
            result = "Sorry! You lost!"
            plays++
        }
        if (computerChoice == 'rock' && userChoice == 'scissors') {
            result = "Sorry! You lost!"
            plays++
        }
        if (computerChoice == 'scissors' && userChoice == 'paper') {
            result = "Sorry! You lost!"
            plays++
        }
        //display the result
        resultDisplay.innerHTML = result
        //dispaly score
        rateDisplay.innerHTML = percentageFormatter(score / plays)
    })
})


function percentageFormatter(num) {
    return `${parseFloat(num*100).toFixed(2)}%`;
}






