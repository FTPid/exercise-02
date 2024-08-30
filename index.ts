// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

// Given integer
let number: number = 9;

// Loop from 1 to 10 to create the multiplication table
for (let i = 1; i <= 10; i++) {
    // Calculate the product
    let product = number * i;

    // Display the multiplication statement
    console.log(`${number} x ${i} = ${product}`);
}



// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome

let str: string = 'madam';


let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let reversedStr = cleanedStr.split('').reverse().join('');


if (cleanedStr === reversedStr) {
    console.log(`${str} → palindrome`);
} else {
    console.log(`${str} → not a palindrome`);
}

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”

let centimeters: number = 100000;
let kilometers = centimeters / 100000;
let result = `${kilometers} km`;
console.log(result);


// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

// Given number
let number1: number = 1000;

let formattedNumber = number1.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

console.log(formattedNumber);


// Write a code to remove the first occurrence of a given “search string” from a string
// Example: string = “Hello world”, search string = “ell” → “Ho world”
// Given string and search string
let _str: string = "Hello world";
let searchString: string = "ell";

// Remove the first occurrence of the search string
let _result = _str.replace(searchString, '');

// Display the result
console.log(_result);


// Write a code to capitalize the first letter of each word in a string
// Example: “hello world” → “Hello World”


// Given string
let str1: string = "hello world";
let capitalizedStr = str1
    .split(' ')
    .map(word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(' ');

console.log(capitalizedStr);




// Write a code to swap the case of each character from string
// Example: ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// Given string
let str2: string = 'The QuiCk BrOwN Fox';

let swappedCaseStr = str2
    .split('')
    .map(char =>
        char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase()
    )
    .join('');
console.log(swappedCaseStr);


// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42


let num1: number = 42;
let num2: number = 27;

let largestNum = Math.max(num1, num2);
console.log(largestNum);

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// Given numbers
let nums1: number = 42;
let nums2: number = 27;
let nums3: number = 18;

let sortedNumbers = [nums1, nums2, nums3].sort((a, b) => a - b);
console.log(sortedNumbers.join(', '));


// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1

let input = "hello";
let output = typeof input === 'string' ? 1 :
    typeof input === 'number' ? 2 :
        3;
console.log(output);


// Write a code to change every letter a into * from a string of input
// Example: ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
// Given string
let str5: string = 'An apple a day keeps the doctor away';

let replacedStr = str5.replace(/a/g, '*');

console.log(replacedStr);
