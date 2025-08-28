// Problem 1
function problem1() {
  
  const str = document.getElementById("input1").value;

  // String reverse 
  const reversed = str.split('').reverse().join('');

  // Output 
  document.getElementById("output1").innerText = reversed;
}
// Problem 2: Count Vowels in a String
function problem2() {
  const str = document.getElementById("input2").value.toLowerCase(); // lowercase for 
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById("output2").innerText = count;
}
// Problem 3: Check for Palindrome
function problem3() {
  const str = document.getElementById("input3").value.toLowerCase(); // ignore case
  const reversed = str.split('').reverse().join('');
  const isPalindrome = str === reversed;
  
  document.getElementById("output3").innerText = isPalindrome;
}

// Problem 4: Find the Maximum Number
function problem4() {
  const input = document.getElementById("input4").value;
  
  // String থেকে number array বানানো
  const numbers = input.split(',').map(num => Number(num.trim()));
  
  // Maximum বের করা
  const maxNum = Math.max(...numbers);
  
  // Output দেখানো
  document.getElementById("output4").innerText = maxNum;
}
//remove duplicates
   // Problem 5: Remove Duplicates from an Array
function problem5() {
  const input = document.getElementById("input5").value;

  // String থেকে array বানানো
  const numbers = input.split(',').map(num => Number(num.trim()));

  // Duplicates remove করার জন্য Set ব্যবহার
  const uniqueNumbers = [...new Set(numbers)];

  // Output দেখানো
  document.getElementById("output5").innerText = "[" + uniqueNumbers.join(", ") + "]";
}
//sum of all numbers in an array
// Problem 6: Sum of All Numbers in an Array
function problem6() {
  const input = document.getElementById("input6").value;

  // String থেকে array বানানো
  const numbers = input.split(',').map(num => Number(num.trim()));

  // সব সংখ্যার যোগফল বের করা
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Output দেখানো
  document.getElementById("output6").innerText = sum;
}
//problem find the even numbers in an array
// Problem 7: Find Even Numbers in an Array
function problem7() {
  const input = document.getElementById("input7").value;

  // String থেকে array বানানো
  const numbers = input.split(',').map(num => Number(num.trim()));

  // শুধু even numbers filter করা
  const evens = numbers.filter(num => num % 2 === 0);

  // Output দেখানো
  document.getElementById("output7").innerText = "[" + evens.join(", ") + "]";
}
// Problem 8: Capitalize the First Letter of Each Word
// Problem 8: Capitalize First Letter of Each Word
function problem8() {
  const str = document.getElementById("input8").value;

  // প্রতিটি word কে split করে প্রথম অক্ষর capitalize করা হচ্ছে
  const capitalized = str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Output দেখানো
  document.getElementById("output8").innerText = capitalized;
}

// Problem 9: Find the Factorial of a Number using a loop
function problem9() {
  const num = Number(document.getElementById("input9").value);

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  document.getElementById("output9").innerText = factorial;
}
//problem ping pong
// Problem 10: PingPong Challenge
function problem10() {
  let result = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }

  document.getElementById("output10").innerText = result.join(", ");
}
