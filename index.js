function hasTargetSum(array, target) {
  // Write your algorithm here
  let hasTarget = false
  let i = 0
  while(i < array.length - 2 && hasTarget === false) {
    array.forEach(element => {
      if(element + array[i] === target ? true : false) {
        hasTarget = true
      }
    });
    i++
  }
  return hasTarget
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  first number === iteration of array ?
    return true
  second number === iteration of array starting at 2 ?
    return true
  ....
*/

/*
  Add written explanation of your solution here
  sum of any two numbers in array equal target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
