var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var message =
  "you are looking for random paragraphs, you have come to the right place. When a random word or a random sentence is not quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind The process is quite simple Choose the number of random paragraphs you would like to see and click the button. Your chosen number of paragraphs will instantly appear.";
var words = message.split(" ");

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);

      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 150);
}
countdown();
