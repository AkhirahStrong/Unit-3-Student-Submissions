# Unit-3-Student-Submissions

STUDENT SUBMISSIONS

Task: Create an array of objects representing student submissions. Define a variety of functions for working with such an array. Also call each of the functions at least once to test it.

Build Specifications:
Declare a variable named submissions that is initialized to an array with the following objects:


name
score
date
passed
Jane
95
2020-01-24
true
Joe
77
2018-05-14
true
Jack
59
2019-07-05
false
Jill
88
2020-04-22
true


Declare a function named addSubmission
Parameter(s): array, newName, newScore, newDate
Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

Declare a function named deleteSubmissionByIndex
Parameter(s): array, index
Functionality: remove an object from the array at the specified index using the splice method.

Declare a function named deleteSubmissionByName
Parameter(s): array, name
Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

Declare a function named editSubmission
Parameter(s): array, index, score
Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
continued on the next page…
Declare a function named findSubmissionByName
Parameter(s): array, name
Functionality: return the object in the array that has the provided name. Use the find method.

Declare a function named findLowestScore
Parameter(s): array
Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

Declare a function named findAverageScore
Parameter(s): array
Functionality: return the average quiz score.  Use a for...of loop.

Declare a function named filterPassing
Parameter(s): array
Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 

Declare a function named filter90AndAbove
Parameter(s): array
Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
