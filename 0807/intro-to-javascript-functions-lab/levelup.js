/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (grade) => {
    if (grade >= 90)
        return "A";
    if (grade >= 80)
        return "B";
    if (grade >= 70)
        return "C";
    if (grade >= 60)
        return "D"
    return "F";
}

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (first, last) => {
    username = "";
    if (first.length >= 3)
        username += first.split(0,2);
    else
        username += first;
    if (last.length >= 3)
        username += last.split(0,2);
    else
        username += last;
    username += first.length + last.length;
    return (username);
}

console.log('Exercise 11 Result:', createUsername("Dr", "Ng"));
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    return args.length
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4, 5));

