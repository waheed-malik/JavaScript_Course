
    // write a program to print the marks of a student
    let marks = {
      waheed: 99,
      asif: 34,
      ali: 12,
    }
    // problem NO 1
    for (let i = 0; i < Object.keys(marks).length; i++) {
      // console.log(" The marks of "  + Object.keys(marks)[i] + " are " + marks [Object.keys(marks)[i]])
    }

    // Problem No 2
    for (let key in marks) {
      // console.log(" The marks of "  + key + " are " + marks [key])
    }

    // problem No 3
    let cn = 43
    let i
    while (i != cn) {
      console.log("Try Again")
      i = prompt("Enter a Number")

    }
    console.log("You have entered a correct number")

    // Problem No 4
    const mean = (a, b, c, d) => {
      return (a + b + c + d) / 4
    }
    console.log(mean(4, 5, 6, 7))
  