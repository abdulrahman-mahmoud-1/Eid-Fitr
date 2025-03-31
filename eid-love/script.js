// index.html (Name Validation)
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const nameButton = document.getElementById("nameButton");
  const message = document.getElementById("message");

  if (nameButton && nameInput && message) {
    // Check if elements exist
    nameButton.addEventListener("click", function () {
      const name = nameInput.value;
      if (name === "قلب عبدالرحمن") {
        // Redirect to the quiz page
        window.location.href = "quiz.html";
      } else {
        message.textContent =
          "No, that is not your name.. your name is -> قلب عبدالرحمن <-";
      }
    });
  } else {
    console.error("One or more elements not found on index.html");
  }

  // quiz.html (Quiz Validation)
  const quizForm = document.getElementById("quizForm");
  const quizMessage = document.getElementById("quizMessage");

  if (quizForm) {
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the answers from the form
      const q1 = document.getElementById("q1").value;
      const q2 = document.getElementById("q2").value;
      const q3 = document.getElementById("q3").value;

      // Validate the answers
      let correctAnswers = 0;
      if (q1 === "27/7/2022") {
        //replace 'answer1' with the real answer
        correctAnswers++;
      }
      if (q2 === "21/1/2024") {
        //replace 'answer2' with the real answer
        correctAnswers++;
      }
      if (q3 === "1/1/2023") {
        //replace 'answer3' with the real answer
        correctAnswers++;
      }

      // Display the message based on the number of correct answers
      if (correctAnswers === 3) {
        quizMessage.textContent = "أحسنتِ! أنتِ تعرفينني جيدًا يا حبيبتي.";
        // Redirect to the message page
        window.location.href = "message.html";
      } else {
        quizMessage.textContent = "بعض الإجابات غير صحيحة. حاولي مرة أخرى!";
      }
    });
  }
});
