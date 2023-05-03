// /* Step 01: */
// const quizSelector = document.getElementById("quiz-selector");
// const quizContainer = document.getElementById("quiz-container");
// const questionContainer = document.getElementById("question-container");
// const answerButtonsContainer = document.getElementById("answer-buttons-container");
// const resultsContainer = document.getElementById("results-container");

// class Quiz {
//     constructor(questions) {
//         this.questionsKey = Quiz.shuffleArray(questions);
//         this.currentQuestionIndex = 0;
//         this.score = 0;
//         /* Step 04: */
//         this.displayQuestion();
//     }

//     /* Step 05: */
//     displayQuestion() {
//         answerButtonsContainer.innerHTML = "";
//         const currentQuestion = this.questionsKey[this.currentQuestionIndex]
//         // console.log(currentQuestion);
//         questionContainer.textContent = currentQuestion.question;
//         const answers = Quiz.shuffleArray(currentQuestion.answers);
//         answers.forEach(answer => {
//             const button = document.createElement("button");
//             button.classList = ["answer-button"];
//             button.textContent = answer;
//             button.addEventListener("click", this.checkAnswer.bind(this)); // addEventListener mmain koi method call hone ke baad us main usko this nhi milta (scope change hone ki wajaa se)that's why .bind(this) use krte hain
//             answerButtonsContainer.appendChild(button)
//         })
//     }

//     /* Step 06: */
//     checkAnswer(event) { // event is a default parameter given by addEventListener has many imp things in it.
//         const selectedAnswer = event.target.textContent; // event.target means jis element pe click huaa hai ab .textContent lagaa ke uska phr text le aayega.

//         const currentQuestion = this.questionsKey[this.currentQuestionIndex] // again initialize same variable with same value bcuz not find in this function bcuz of scope.

//         if (selectedAnswer === currentQuestion.correctAnswer) {
//             this.score++;
//         }

//         this.currentQuestionIndex++;

//         if (this.currentQuestionIndex < this.questionsKey.length) {
//             this.displayQuestion();
//         } else {
//             this.showResult();
//         }
//     }

//     /* Step 07: */
//     showResult() {
//         quizContainer.style.display = "none";
//         resultsContainer.style.display = "block";
//         resultsContainer.innerHTML = `
//         <h2>Quiz Result<h2>
//         <p>You Scored ${this.score} out of ${this.questionsKey.length} questions</p>
//         <button id="reload-quiz">Reload All quiz</button>
//         `;

//         document.getElementById("reload-quiz").addEventListener("click", () => {
//             // quizContainer.style.display = "none";
//             resultsContainer.style.display = "none";
//             quizSelector.style.display = "flex";
//         })
//     }

//     /* Step 08: */
//     static shuffleArray(arr) {
//         return arr.sort(() => Math.random() - 0.5);
//     }
// }

// /* Step 03: */
// const loadQuiz = (questions) => {
//     const quiz = new Quiz(questions);
//     // quiz.displayQuestion(); // isko ooper direct constructor ke andr bhi call karwaa skte hain
//     quizContainer.style.display = "block";
//     quizSelector.style.display = "none";
// }

// /* Step 02: */
// const loadAllQuiz = async () => {
//     const response = await fetch("./quizzes.json")
//     const quizzes = await response.json()
//     // console.log(quizzes);
//     quizzes.forEach((quiz, index) => {
//         const quizCard = document.createElement("div");
//         quizCard.classList = ["quiz-card"];
//         quizCard.innerText = "Quiz " + (index + 1);
//         quizCard.addEventListener("click", () => loadQuiz(quiz));
//         quizSelector.appendChild(quizCard)
//     })
// }

// loadAllQuiz();