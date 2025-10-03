let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // let btn = question.querySelector(".question-btn");
  question.addEventListener("click", function () {
    questions.forEach(function (question2) {
      if (question2 !== question) {
        question2.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
