true - true

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const reverseWords = str => str.split(" ").reverse().join(" ");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
grape

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
kiwi

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
function addNumbers(a, b) { return a + b; }
true * orange
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const multiply = (a, b) => a * b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

apple

const findSmallestNumber = numbers => Math.min(...numbers);
81 + 10,96,53,16,41,58,16,75,4,44,97,73,69,50,84,72,44,35,44,79,31,79,63,91

const getRandomSubset = (array, size) => array.slice(0, size);
27,38,2,49,4,50,37,95,97,9,69,15,38,1,57,23,0,77,1,87,86,27,57,97,85,64,50,13,53,40,51,95,69,38,69,45,86,77,35,85,19,75,16,78,37,3,66,44,63,21,59,1,3,55,22,56,54,22,68,31,24,62,98,25,87,37,52,74,87,99,62,47,21,49,8,99,75,78,87,93,72,97,57,48,88,13,90,34 + 62
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
