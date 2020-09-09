const quizData = [
    {
        question: "As capivaras são nativas de qual continente?",
        a: "Ásia",
        b: "Europa",
        c: "América Central",
        d: "América do Sul",
        correct: "d",
    },
    {
        question: "A palavra capivara vem do tupi-guanari, e significa:",
        a: "Porco d'água",
        b: "Comedor de capim",
        c: "Rato gigante",
        d: "Bichinho bonitinho",
        correct: "b",
    },
    {
        question: "Na Lista Vermelha de Espécies Ameaçadas da IUCN, a situação da capivara consta como:",
        a: "Pouco preocupante",
        b: "Quase ameaçada",
        c: "Ameaçada",
        d: "Extinta",
        correct: "a",
    },
    {
        question: "Quanto tempo, aproximadamente, dura uma gestação de uma capivara?",
        a: "180 dias",
        b: "120 dias",
        c: "60 dias",
        d: "Nenhuma das respostas acima",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score} de ${quizData.length} questões! <br> Capivaras são incríveis, não acha?</h2>
                
                <button onclick="location.reload()">Tentar novamente</button>
            `;
        }
    }
});
