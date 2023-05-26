function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
 
  let words = str.split('');
 
  while (words.length > 1) {
    if (words.shift() !== words.pop()) {
      return false;
    }
  }
  return true;
}

let form = document.querySelector('form');
let input = document.querySelector('input');
let output = document.querySelector('p');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let word = input.value;
  if (isPalindrome(word)) {
    output.textContent = `"${word}" -- это палиндром.`;
  } else {
    output.textContent = `"${word}" -- это не палиндром.`;
  }
});
