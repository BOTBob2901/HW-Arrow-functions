"use strict";
//Task #1
let str = "Hi"
const addExclamation = str => { 
  str = str.split()
  str.push("!")
  return str.join('');
};
console.log(addExclamation(str))

//Task #2
let sentence = "I Love JS"
const reverseWords = sentence => sentence = sentence.split(' ').reverse().join(' ')
console.log(reverseWords(sentence))

//Task #3
let arr = [1, 2, 3]
const squareAll = arr => {
  for(let i=0; i<arr.length ; i++)
    arr[i] = Math.pow(arr[i],2)
  return arr
};
console.log(squareAll(arr))

//Task #4
let names = ["Dan", "Jonathan", "Eli"]
const filterNames = (names, minLength) => names.filter(element => element.length > minLength);
console.log(filterNames(names, 3))

//Task #5
let nums = [1, 5, 8]
let nums2 = [3, -2, 0]
const allPositive = numbers => numbers.every(elem => elem > 0);
console.log(allPositive(nums))
console.log(allPositive(nums2))