// Create a Math Question
// Math questions will be randomly generated
// Question type multiplication question with random number range from 1-10
// Answer will be the product of the random number range and the random number
// User will have to answer question
// On submit answer will be compared witht the random generated answer
// If answer is correct then score will be incremented
// If answer will be wrong then score will be decremented

const questionElement = document.getElementById('question')
const questionFormElement = document.getElementById('question-form')
const scoreElement = document.getElementById('score')
const operations = ['addition', 'subtraction', 'multiplication', 'division']
let storedAnswer, score = 0;

const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateQuestion = () => {
    const randomNumber1 = randomNumberGenerator(1, 10)
    const randomNumber2 = randomNumberGenerator(1, 10)
    const randomNumber3 = randomNumberGenerator(0, 3)
    if (randomNumber3 === 0) {
        const question = `Q. What is ${randomNumber1} added by ${randomNumber2}?`
        const answer = randomNumber1+randomNumber2
        return {question, answer}
    } else if (randomNumber3 === 1) {
        const question = `Q. What is ${randomNumber1} subtracted by ${randomNumber2}?`
        const answer = randomNumber1-randomNumber2
        return {question, answer}
    } else if (randomNumber3 === 2) {
        const question = `Q. What is ${randomNumber1} multiplied by ${randomNumber2}?`
        const answer = randomNumber1*randomNumber2
        return {question, answer}
    } else if (randomNumber3 === 3) {
        const question = `Q. What is ${randomNumber1} divided by ${randomNumber2}?`
        const answer = randomNumber1/randomNumber2
        return {question, answer}
    }
}

const showQuestion = () => {
    const {question, answer} = generateQuestion()
    questionElement.innerText = question
    storedAnswer = answer
}
showQuestion()

const checkAnswer = (event) => {
    event.preventDefault()
    const formData = new FormData(questionFormElement)
    const userAnswer = Number(formData.get('answer'))
    if (userAnswer === Math.round(storedAnswer)) {
        score++
    } else {
        score--
    }
    scoreElement.innerText = score
    showQuestion()
    event.target.reset()
}