
var card = $("#quiz-area");

// Question set
var questions = [
    {
        question: "1. What is the 6th book of the Old Testament?",
        answers: [" Genesis ", " Matthew ", " Joshua ", " Revelation "],
        correctAnswer: " Joshua "
    }, 
    {
        question: "2. Who was the oldest living person in the Old Testament?",
        answers: [" Adam ", " Methuselah ", " Abraham ", " Elijah "],
        correctAnswer: " Methuselah "
    }, 
    {
        question: "3. Who are the only two people who went to Heaven without dying?",
        answers: [" David and Jonathan ", " Jacob and Esau ", " Joseph and Samson ", " Enoch and Elijah "],
        correctAnswer: " Enoch and Elijah "
    }, 
    {
        question: "4. Who is David most notably known for killing?",
        answers: [" Issac ", " Saul ", " Goliath ", " Nathan "],
        correctAnswer: " Goliath "
    },
    {
        question: "5. What did God make on the 3rd day of creation?",
        answers: [" Water ", " Light ", " Animals ", " Grass "],
        correctAnswer: " Grass "
    },
    {
        question: "6. What king did Esther marry?",
        answers: [" Joseph ", " Nebuchadnezzar ", " Xerxes ", " Pontius Pilate "],
        correctAnswer: " Xerxes "

    },
    {
        question: "7. Who interpreted King Nebuchadnezzar's Dream?",
        answers: [" Jacob ", " Joseph ", " Daniel ", " Samson "],
        correctAnswer: " Daniel "
    }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
