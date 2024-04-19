const randomNumber = getRandomNumber();

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const squareRoot = num => Math.sqrt(num);
22,24,38,37,24,71,46,97,44,23,3,53,15,21,77,36,22,5,27,9,69,58,5,23,19,63,31,43,63,35,6,33,16,8,83,61,16,34,5,85,49,21,10,48,94,62,97,61,64,57,91,94,75,98,84,99,28,67,78,83,92 * true
const isPalindrome = str => str === str.split("").reverse().join("");
true - false
const isPalindrome = str => str === str.split("").reverse().join("");
// This is a comment
true / 30

const sum = (a, b) => a + b;
orange

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
console.log(getRandomString());

const getRandomIndex = array => Math.floor(Math.random() * array.length);
apple

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana / apple
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
46 - orange
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
