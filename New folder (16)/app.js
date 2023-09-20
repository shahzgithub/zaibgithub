function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const midpoint = Math.floor(str.length / 2);
    for (let i = 0; i < midpoint; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const user_input = prompt("Enter a string:");
  if (isPalindrome(user_input)) {
    console.log("The string is a palindrome.");
  } else {
    console.log("The string is not a palindrome.");
  }  