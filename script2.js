const exams = {
    "Latviešu_valoda": "2026-06-03",
    "Angļu_valoda": "2026-05-25",
    "Bioloģija": "2026-05-22",
    "Ķīmija": "2026-05-18",
    "Fizika": "2026-05-20",
    "Matemātika": "2026-06-01"
};

function daysUntil(dateStr) {
    const today = new Date();
    const exam = new Date(dateStr);

    today.setHours(0,0,0,0);
    exam.setHours(0,0,0,0);

    return Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
}

function myFunction() {
    let izvele = document.getElementById("ievade").value.trim();

    izvele = izvele.charAt(0).toUpperCase() + izvele.slice(1);

    if (exams[izvele]) {
        const days = daysUntil(exams[izvele]);

        alert("Līdz " + izvele + " eksāmenam palika " + days + " dienas 😊");
    } else {
        alert("Lūdzu, ievadiet pareizu priekšmeta nosaukumu!");
    }
}


function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const data = {
      "Matemātika": {
          questions: ["Cik ir kvadrātsakne no 144", "Cik skaldnes ir regulāra četrsūra piramīdai?","Cik ir sin90?"],
          answers: ["12", "5", "1"]
      },
      "Latviešu valoda": {
          questions: ["Cik konjugācijas latviešu valodā pastāv darbības vārdam?","Kādas vardšķīras tu zini?","Cik burti latviešu valodā alfbetā?"],
          answers: ["3", "Lietvārds, īpašības vārds, skaitļa vārds, darbības vārds", "27"]
      },
      "Angļu valoda": {
          questions: ["How many conditionals are existing in English?", "What is the capital of Great Britain?","How many types of relative clauses exist in English?"],
          answers: ["5", "London", "3"]
      }
  };
  
  let currentAnswer = "";
  
  function next_question(subject) {
      const questionEl = document.getElementById("question");
      const answerEl = document.getElementById("answer");
  
      const list = data[subject];
  
      const id = random_int(0, list.questions.length - 1);
  
      questionEl.innerText = list.questions[id];
      currentAnswer = list.answers[id];
  
      answerEl.innerText = "";
      answerEl.style.display = "none";
  }
  
  function show_answer() {
      const answerEl = document.getElementById("answer");
      answerEl.innerText = currentAnswer;
      answerEl.style.display = "block";
  }
