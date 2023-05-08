/*Task: Create an array of objects representing student submissions. 
Define a variety of functions for working with such an array. Also call 
each of the functions at least once to test it.
*/

/*Declare a variable named submissions that is initialized 
to an array with the following objects:
name score date passed
Jane 95 2020-01-24 true
Joe 77 2018-05-14 true
Jack 59 2019-07-05 false
Jill 88 2020-04-22 true
*/

let submissions = [
  { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
  { name: "Joe", score: 77, date: "2018 - 05 - 14", passed: true },
  { name: "Jack", score: 59, date: "2019 - 07 - 05", passed: false },
  { name: "Jill", score: 88, date: "2020 - 04 - 22", passed: true },
];

console.log(submissions);

/*Declare a function named addSubmission
  Parameter(s): array, newName, newScore, newDate*/
function addSubmission(array, newName, newScore, newDate) {
  /*Functionality: construct an object and push it into the array. 
    The object must have the same properties as the objects already in the array.*/

  /*Use conditional statements to set the value for the passed property to true if 
    the score is greater than or equal to 60 and false otherwise*/
  let passed = newScore >= 60 ? true : false;
  const pushNewData = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: this.passed,
  };
  array.push(pushNewData);
}

console.log(submissions);
let newStu = addSubmission(submissions, "Avery", 95, "2023 - 05 - 03");
console.log(newStu);

/*Declare a function named deleteSubmissionByIndex
Parameter(s): array, index*/
function deleteSubmissionByName(array, name) {
  /*Functionality: remove the object from the array 
that has the provided name.  Incorporate the findIndex
 method and the splice method.*/
  const index = array.findIndex((obj) => obj.name === name);

  if (index !== -1) {
    array.splice(index, 1);
  }
  //   array.splice(index, 1);
}

// console.log("Before:", submissions);
// deleteSubmissionByIndex(submissions, "Avery");
// console.log("After:", submissions);

/*Declare a function named editSubmission
Parameter(s): array, index, score
Functionality: update an object’s score in 
the array at the specified index. Use conditional 
statements to set the value for the passed property 
to true if the score is greater than or equal to 60 
and false otherwise.*/

function editSubmission(array, index, score) {
  const obj = array[index];
  obj.score = score;
  obj.passed = score >= 60 ? true : false;
}

/*Declare a function named findSubmissionByName
Parameter(s): array, name
Functionality: return the object in the array that has the 
provided name. Use the find method.
*/
function findSubmissionByName(array, name) {
  return array.find((obj) => obj.name === name);
}
// let test1 = findSubmissionByName(submissions, "Joe");
// console.log(test1);

/*Declare a function named findLowestScore
Parameter(s): array
Functionality: return the object in the array that has the 
lowest score. Use the forEach method to loop through the whole array.
*/

function findLowestScore(array) {
  //I chose to use an array object instaed of a hard coded number
  //because I wanted the function to compare the objects in the
  //array to each other rather than a number.
  let objOfLowestScore = array[0];

  for (let i = 0; i < array.length; i++) {
    //It took tears, tantrums, and tea to figure out it's best to put .score/name/etc
    //when calling the array so the function know what to look for within the student object
    if (array[i].score < objOfLowestScore.score) {
      objOfLowestScore = array[i];
    }
  }

  return objOfLowestScore;
}

let testLowestScore = findLowestScore(submissions);
console.log(testLowestScore);

/*Declare a function named findAverageScore
Parameter(s): array
Functionality: return the average quiz score.  Use a for...of loop.
*/
function findAverageScore(array) {
  let scoreSum = 0;
  let scoreCount = 0;

  for (const averageScore of array) {
    scoreSum += averageScore.score;
    scoreCount++;
  }
  return scoreSum / scoreCount;
}

let testAverageScore = findAverageScore(submissions);
console.log(testAverageScore);

/*Declare a function named filterPassing
Parameter(s): array
Functionality: return a new array using the filter method. The filter 
method should find objects in the array that have passing scores. 
*/

/*The .filter() method in JavaScript creates a new array with all 
the elements that pass the test implemented by the provided function.*/
function filterPassing(array) {
  return array.filter(function (submissions) {
    return submissions.passed;
  });
}

// let testFilterPassing = filterPassing(submissions);
// console.log(testFilterPassing);

/*Declare a function named filter90AndAbove
Parameter(s): array
Functionality: return a new array using the filter method. The filter 
method should find objects in the array that have scores greater than or equal to 90.
 */

function filter90AndAbove(array) {
  return array.filter(function (submissions) {
    return submissions.score >= 90;
  });
}
let testAbove90 = filter90AndAbove(submissions);
console.log(testAbove90);
