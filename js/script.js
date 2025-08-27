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
