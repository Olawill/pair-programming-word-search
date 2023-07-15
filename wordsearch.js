const transpose = require("./transpose");

// Main function
const wordSearch = (letters, word) => {

  // Check if the array is empty
  if (letters.length === 0) {
    return false;
  }

  // If word to be searched is undefined
  if (!word) {
    return false;
  }
  
  // Join the each sub arrays into words
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  // STRETCH: Backward Horizontal and Vertical Join
  const horizontalBackJoin = letters.map(ls => ls.reverse().join(''));
  const verticalBackJoin = transpose(letters).map(ls => ls.reverse().join(''));

  // Combine the words array into one big array
  const allWordArrays = [
    horizontalJoin, verticalJoin,
    horizontalBackJoin, verticalBackJoin
  ];
  
  // Loop through the array of words
  // Checking the word against all the arrays:
  // ================================================
  // horizontalJoin, verticalJoin, horizontalBackJoin
  // verticalBackJoin
  // =================================================
  for (const a of allWordArrays) {
    for (const l of a) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;

