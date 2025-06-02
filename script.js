function validEmail(str) {
  if (!str) return false;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Ensure no consecutive dots or hyphens in local or domain parts
  if (str.includes('..') || str.includes('--')) return false;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
