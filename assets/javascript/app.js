//onclick event to start game
$(document).on("click", "#start", function() {
    console.log("#start")
});


//timer

//questions and answer array
var oTquestions = [{
    question: "1. What is the 6th book of the Old Testament?",
    answers: ["Genesis", "Matthew", "Joshua", "Revelation"],
    correctAnswer: "Joshua"
}, {
    question: "2. Who was the oldest living person in the Old Testament?",
    answers: ["Adam", "Methuselah", "Abraham", "Elijah"],
    correctAnswer: "Methuselah"
}, {
    question: "3. Who are the only two people who went to without dying?",
    answers: ["David and Jonatha", "Jacob and Esau", "Joseph and Samson", "Enoch and Elijah"],
    correctAnswer: "Enoch and Elijah"
}, {
    question: "4. Who is David most notably known for killing?",
    answers: ["Issac", "Saul", "Goliath", "Nathan"],
    correctAnswer: "Goliath"
}];

//answer counter (correct/incorrect/unanswered)

//making this game work 

//clear and restart the timer and clear answers without having to refresh