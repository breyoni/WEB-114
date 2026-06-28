"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: ["Can you guess what year was I born?"]
   - Variable name: birthYear
   - Correct answer: 2000
   - How I'll validate and check the answer : I'll check and make sure that birthYear isn't an empty Number string, and if it has a value it'll convert to a number

   Question 2: ["What element is my zodiac sign, Scorpio?"]
   - Variable name: elementSign
   - Correct answer: Water
   - How I'll validate and check the answer : Same with checking that it doesn't have an empty string and compare the strings letter by letter 

   Question 3: ["What's my favorite season?"]
   - Variable name: seasonDay
   - Correct answer: Spring 
   - How I'll validate and check the answer : I'll check that seasonDay is not an empty string and compare the strings letter by letter

   Question 4: ["Can you guess how many siblings I have?"]
   - Variable name: manySiblings
   - Correct answer: Two
   - How I'll validate and check the answer : 'll check to make sure there's no empty Number string and if it havs a value to convert it to a number and compare it to 2 using ===

3. Use that structure for all four questions.

6. Math: How will I calculate the percentage?
I'll calculate the percentage by dividing the total number of questions by 100 to get the answer for the quiz 

7. Final feedback logic (if / else if / else):
- If score => 4 ["Perfect! 4/4!"]
- else if score => 3 ["Great job, 3/4!"]
- else if score (< 2) => 2 ["Needs improvement, but that's okay! 2/4"]
- else if score => 1 ["Let try again...1/4"]
- else score => 0 ["Let try again...0/4"]

Logical operators I will use:
- && for when both conditions are true 
- || for when one condition is true, ! for opposite conditions
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0; 
const totalQuestions = 4;

// Question 1
let birthYear = prompt("Can you guess what year was I born?");
let birthYearNum = Number(birthYear);

if (birthYearNum === 2000) {
    alert('Correct! I was born in 2000.');
    score = score + 1;
}
else { 
    alert('Wrong!'); // any value expect 2000
}

// Question 2
let elementSign = prompt("What element is my zodiac sign, Scorpio?");

if (elementSign === "Water") {
    alert('Correct! Scorpio is a Water sign.');
        score = score + 1;
}
else { 
    alert('Nope!'); 
}

// Question 3
let seasonDay = prompt("What's my favorite season?");

if (seasonDay === "Spring") {
    alert('Correct! My favorite season is Spring.');
        score = score + 1;
}
else { 
    alert('Nope!'); 
}

// Question 4
let manySiblings = prompt("Can you guess how many siblings I have?");
let manySiblingsNum = Number(manySiblings);

if (manySiblingsNum === 2) {
    alert('Correct! I have two siblings.');
        score = score + 1;
}
else { 
    alert('Nope!'); // any value expect 2000
}

// Calculate percentage using math

let percentage = (score / totalQuestions) * 100;
console.log("You scored " + score + " out of " + totalQuestions + "(" + percentage + "%)"); 

// Final feedback using if / else if / else

if (score === 4) { 
    alert("Perfect! 4/4!");
} else if (score === 3)  {
    alert("Great job, 3/4!");
} else if (score === 2) {
    alert("Needs improvement, but that's okay! 2/4")
}
else if (score === 1) {
    alert("Let try again...1/4")
}
else if (score === 0) {
       alert("Let try again...0/4")
}
// Additional feedback with logical operators

// Final summary alert