// Exercise
// Get Retired - get the remaining time

const ageToGetRetired = 65;
var testAge = "1999-12-19";
var testName = "El pepe";

function getretiredTimeLeft(birthDay, name) {
  const today = new Date();
  const birthDayFormated = new Date(birthDay);

  const currentTime =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  const dateToGetRetiredFormated = (birthDayFormated.getFullYear() + ageToGetRetired) +
  "-" +
  String(birthDayFormated.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(birthDayFormated.getDate()).padStart(2, "0");

  console.log('Flag 1: ' + currentTime);

  const date1 = new Date(currentTime);
  const date3 = new Date(dateToGetRetiredFormated);

  console.log('Flag 2: ' + date1 + ' ' + birthDayFormated + ' ' + date3 + ' ' + dateToGetRetiredFormated);

  const result = date3 - date1;

  // Convert the time difference to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const daysDifference = Math.floor(result / (24 * 60 * 60 * 1000));

  console.log('There are ' + daysDifference + ' days left for ' + name);
}

getretiredTimeLeft(testAge, testName);

// Function as expressions

var varFunct = function() {
    console.log('el pepe');
};

varFunct();

// Default values in functions

var sumFunction = function(a, b, c = 3) {
    return a + b + c;
}

console.log(sumFunction(1, 2));

// Template String
var name = 'pepe';
console.log(`The name is ${name}`);

// Exercise
// Evaluate a Test

function calculateScore (rightAnswers, wrongAnswers) {
    const totalAnswers = rightAnswers + wrongAnswers;
    const successPercentage = (rightAnswers * 100) / totalAnswers;
    console.log('Percentage: ' + successPercentage);
    console.log('Score: ')
    if (successPercentage >= 90) {
        console.log('A');
      } else if (successPercentage >= 70) {
        console.log('B');
      } else if (successPercentage >= 45) {
        console.log('C');
      } else {
        console.log('D');
      }
}

calculateScore(70, 30);