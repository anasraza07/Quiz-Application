const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");
const resultsContainer = document.getElementById("results-container");

class Quiz {
    constructor(questions) {
        this.questionsKey = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.displayQuestions();

    }

    displayQuestions() {
        answerButtonsContainer.innerHTML = "";
        const currentQuestion = this.questionsKey[this.currentQuestionIndex];
        if (this.currentQuestionIndex === 0) {
            questionContainer.textContent = ("0" + (this.currentQuestionIndex + 1) + " - ") + currentQuestion.question;
        }
        else {
            questionContainer.textContent = ("0" + (this.currentQuestionIndex + 1) + " - ") + currentQuestion.question;
        }

        const answer = Quiz.shuffleArray(currentQuestion.answers);
        answer.forEach(answer => {
            const button = document.createElement("button");
            button.classList = ["answer-button"];
            button.textContent = answer;
            button.addEventListener("click", this.checkAnswer.bind(this))
            answerButtonsContainer.appendChild(button);
        })
    }

    checkAnswer(event) {
        // console.log(event.target.textContent)
        const selectedAnswer = event.target.textContent;

        const currentQuestion = this.questionsKey[this.currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
            this.score++;
        }

        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questionsKey.length) {
            this.displayQuestions();
        } else {
            this.showResult();
        }
    }

    showResult() {
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `
            <h1>Quiz Result</h1>
            <p>You Scored ${this.score} out of ${this.questionsKey.length}</p>
            <button id="reload-quiz">Reload All Quiz</button>
        `;
        document.getElementById("reload-quiz").addEventListener("click", () => {
            resultsContainer.style.display = "none";
            quizSelector.style.display = "flex";
        })
    }

    static shuffleArray(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
}
const loadQuiz = (questions) => {
    // console.log(questions);
    const quiz = new Quiz(questions);
    // quiz.displayQuestions();
    quizContainer.style.display = "block";
    quizSelector.style.display = "none";

}

const loadAllQuiz = async () => {
    const response = await fetch("./quizzes.json")
    const quizzes = await response.json();
    // console.log(quizzes);
    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.textContent = "Quiz " + (index + 1);
        quizSelector.appendChild(quizCard);
        quizCard.addEventListener("click", () => {
            loadQuiz(quiz)
        })
    })
}

loadAllQuiz();  