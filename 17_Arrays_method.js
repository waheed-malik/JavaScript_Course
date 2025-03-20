
    // Array Method

    let num=[1,2,3,34,4]
    let  b=num.toString()
    console.log(b);
    let c=num.join("_")
    console.log(c, typeof c)
  
    // pop
     let p= num.pop() //pop returns the popped element
     console.log(num,p)

    //  push
     let P= num.push(56) //push returns the new array length
     console.log(num,P)

    // shift
    let r=num.shift()   //removes an element fron the start of the array
    console.log(r,num)

    // unshift
    let t=num.unshift(55)   //Add an element fron the start of the array
    console.log(t,num)
