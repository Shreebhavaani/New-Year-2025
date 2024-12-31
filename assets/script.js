const correctAnswers = {
    question1: "Your presence", // Example answer, replace with your own
    question2: "Icecream", // Example answer, replace with your own
    question3: "26 Oct 2024", // Example answer, replace with your own
    question4: "Travel together", // Example answer, replace with your own
    question5: "Stand for you" // Example answer, replace with your own
};

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;

    // Check each answer against the correct answers
    for (let question in correctAnswers) {
        const userAnswer = document.getElementById(question).value.trim().toLowerCase();
        if (userAnswer === correctAnswers[question].toLowerCase()) {
            score++;
        }
    }

    // Update the score on the same page
    document.getElementById("score").textContent = score;

    // If all answers are correct, redirect to result page
    if (score === 5) {
        window.location.href = `result.html?score=${score}`;
    } else {
        // If not all answers are correct, still show a message (optional)
        alert("You didn't get all answers correct, try again to get to the results!");
    }
});