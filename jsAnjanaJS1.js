
//Assignation and initialization


const buttonTrue = document.getElementById("trueButton");
const buttonFalse = document.getElementById("falseButton");
const answerToQuest = document.getElementById("describAnswer");
const nextQuestion = document.getElementById("nextQuest"); 
let counterQuestions = document.getElementById("counterOfQuestions");
let questionPara = document.getElementById("questionParagraph");
let goodQuestions = document.getElementById("correctCounter");
const originalColorTrue = buttonTrue.style.backgroundColor;
const originalColorFalse = buttonFalse.style.backgroundColor;
const firstQuestion = "JavasScript was invented in 1995";
const firstAnswer = "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.";


const javascriptQuestions = ["Strings in JS are editable values",
    "1 + 1 === 2",
    " '1' + '1' === '2' ",
    " typeof ['J', 'S'] === 'array' "
];

const realAnswers = ["In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings."
    ,"The plus operator gives the sum of two numbers."
    ,"The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
    ,"Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties."
];


let maxNumberOfQuestions = String(javascriptQuestions.length + 1);



//Events and functions



buttonTrue.addEventListener("click",() => {
    
    answerToQuest.style.display = "block";
    counterQuestions.textContent = Number(counterQuestions.textContent) + 1;
    buttonTrue.disabled = true;
    buttonFalse.disabled = true;
    if (questionPara.textContent === firstQuestion) {
        buttonTrue.style.backgroundColor = "lightgreen";
        goodQuestions.textContent = Number(goodQuestions.textContent) + 1;
        answerToQuest.textContent = firstAnswer;
    } else if (questionPara.textContent === javascriptQuestions[0]) {
        buttonTrue.style.backgroundColor = "lightcoral";
        answerToQuest.textContent = realAnswers[0];
    } else if (questionPara.textContent === javascriptQuestions[1]) {
        buttonTrue.style.backgroundColor = "lightgreen";
        goodQuestions.textContent = Number(goodQuestions.textContent) + 1;
        answerToQuest.textContent = realAnswers[1];
    } else if (questionPara.textContent === javascriptQuestions[2]) {
        buttonTrue.style.backgroundColor = "lightcoral";
        answerToQuest.textContent = realAnswers[2];
    } else if (questionPara.textContent === javascriptQuestions[3]) {
        buttonTrue.style.backgroundColor = "lightcoral";
        answerToQuest.textContent = realAnswers[3];
    }

    if (counterQuestions.textContent === maxNumberOfQuestions) {
        nextQuestion.disabled = true;
        nextQuestion.textContent = "No more questions!"
    } else {
        nextQuestion.disabled = false;
    }});



buttonFalse.addEventListener("click",() => {

    answerToQuest.style.display = "block";
    counterQuestions.textContent = Number(counterQuestions.textContent) + 1;
    buttonFalse.disabled = true;
    buttonTrue.disabled = true;
    if (questionPara.textContent === firstQuestion) {
        buttonFalse.style.backgroundColor = "lightcoral";
        answerToQuest.textContent = firstAnswer;
    } else if (questionPara.textContent === javascriptQuestions[0]) {
        buttonFalse.style.backgroundColor = "lightgreen";
        goodQuestions.textContent = Number(goodQuestions.textContent) + 1;
        answerToQuest.textContent = realAnswers[0];
    } else if (questionPara.textContent === javascriptQuestions[1]) {
        buttonFalse.style.backgroundColor = "lightcoral";
        answerToQuest.textContent = realAnswers[1];
    } else if (questionPara.textContent === javascriptQuestions[2]) {
        buttonFalse.style.backgroundColor = "lightgreen";
        goodQuestions.textContent = Number(goodQuestions.textContent) + 1;
        answerToQuest.textContent = realAnswers[2];
    } else if (questionPara.textContent === javascriptQuestions[3]) {
        buttonFalse.style.backgroundColor = "lightgreen";
        goodQuestions.textContent = Number(goodQuestions.textContent) + 1;
        answerToQuest.textContent = realAnswers[3];
    }

    if (counterQuestions.textContent === maxNumberOfQuestions) {
        nextQuestion.disabled = true;
        nextQuestion.textContent = "No more questions!"
    } else {
        nextQuestion.disabled = false;
    }});




nextQuestion.addEventListener("click", () => {
    if (questionPara.textContent === firstQuestion ) {
        questionPara.textContent = javascriptQuestions[0];
    } else if (questionPara.textContent === javascriptQuestions[0]) {
        questionPara.textContent = javascriptQuestions[1];
    } else if (questionPara.textContent === javascriptQuestions[1]) {
        questionPara.textContent = javascriptQuestions[2];
    } else if (questionPara.textContent === javascriptQuestions[2]) {
        questionPara.textContent = javascriptQuestions[3];
    }});




nextQuestion.addEventListener("click", () => {

        buttonFalse.disabled = false;
        buttonFalse.style.backgroundColor = originalColorFalse;
        buttonTrue.disabled = false;
        buttonTrue.style.backgroundColor = originalColorTrue;
        nextQuestion.disabled = true;
        answerToQuest.style.display = "none";
});



