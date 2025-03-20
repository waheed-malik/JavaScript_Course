
    let a = prompt("Hi Whats your age?")
    // console.log(typeof a)
    a = Number.parseInt(a); // Converting the string to a number
    // console.log(typeof a)
    if (a < 0) {
      elert("This is an invalid age");
    }
    else if (a < 9) {
      alert("You are a kid and you cannot even Think of driving")
    }
    else if (a < 18 && a >= 9) {
      alert("You are a kid and you can  Think of driving after 18")
    }
    else {
      elert("You can drive ");
    }
    console.log("done")

console.log("you can", a<18?"not drive":"drive")
