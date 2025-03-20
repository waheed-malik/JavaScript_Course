
  // Q NO.1

let str="Wah\""  //escape sequence(\")
console.log(str.length)

// Q.NO.2
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox2";

// const word ='fox2';
console.log(sentence.includes(word))

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"

// Q.NO.3
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false

let name= "WAHEED"
console.log(name.toLowerCase())

// Q.NO.4
let str2= "Please give Rs 1000"
let amount= Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Q.NO.5
let friend="Junaid"
friend[3] ="R"
console.log(friend)   //friend is not changed , beacause string is immutable
