document.getElementById('check-btn').addEventListener('click', function() {
  var input = document.getElementById('text-input').value.toLowerCase();
  var resultDiv = document.getElementById('result');

  if (input === '') {
    alert('Please input a value');
  } else {
    var isPalindrome = checkPalindrome(input);
    if (isPalindrome) {
      resultDiv.textContent = input + ' is a palindrome';
    } else {
      resultDiv.textContent = input + ' is not a palindrome';
    }
  }
});

function checkPalindrome(str) {
  var alphanumericStr = str.replace(/[\W_]/g, '');
  var len = Math.floor(alphanumericStr.length / 2);
  for (var i = 0; i < len; i++) {
    if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
