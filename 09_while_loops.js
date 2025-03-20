
  // Program to add first a natural numbers
  let sum=0
  let n=prompt("Enter the value of n")
  n=Number.parseInt(n)

    for (let i = 0; i < n; i++) {
      sum += (i+1)
      // console.log((i+1),"+")
    }
    console.log(" Sum of first " + n + " natural numbers is " +sum);   //Sum of first 2 natural numbers is 3
    

    // for-in loop
let obj ={
  waheed:90,
  ali:45,
  asif:56,
  afaq:23,
  bilal:78
}
for(let a in obj){
  console.log("Marks of "  + a + " are "  + obj[a]) 
}


// for-of_loop
for(let b of "Waheed"){
  console.log(b) 
}
