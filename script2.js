const prieksmeti = {
    Latviešu_valoda: 60 - 15,
    Angļu_valoda: 60 - 25,
    Bioloģija: 60 - 28,
    Ķīmija: 60 - 32,
    Fizika: 60 - 20,
    Matemātika: 60 - 18,
    }

    function myFunction() {
        const izvele = document.getElementById("ievade").value;

    if (prieksmeti[izvele]) {
        alert("Līdz " + izvele + " eksāmenam palika " + prieksmeti[izvele] + " dienas 😊");
    } else {
        alert("Lūdzu, ievadiet pareizu priekšmeta nosaukumu!");
    }
}



function random_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var list_of_questions = [
    "What is 2+2?",
    "What is the capital of Great Britain?",
    "Cik burti latviešu valodā alfbetā?"
];
var list_of_answers = [
    "4", 
    "London",
    "27"
];

const NUMBER_OF_QUESTIONS = 3;

function next_question() {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");

    const question_id = random_int(0, NUMBER_OF_QUESTIONS - 1);

    question.innerHTML = list_of_questions[question_id];
    answer.innerHTML = list_of_answers[question_id];
    answer.style.display = "none";
}

function show_answer() {
    const answer = document.getElementById("answer");
    answer.style.display = "block";
}
