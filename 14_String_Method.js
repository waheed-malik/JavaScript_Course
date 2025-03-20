// <!-- string Method -->

  let name = "waheed"     //   \"consider is as 1 character
  console.log(name.length)

  console.log(name.toUpperCase())
  console.log(name.toLowerCase())


  // index
  console.log(name.slice(2, 4))
  console.log(name.slice(2))

  console.log(name.replace("wah", "Per"))

  let friend = "Asif"
  console.log(name.concat(" is a friend of ", friend, " Ok"))

  let friend2 = "           Freed       "
  console.log(friend2)
  console.log(friend2.trim())

  let fr = "Ali" + " afaq " + " Ahmad "
  console.log(fr[0])
  console.log(fr[1])
  console.log(fr[2])
  console.log(fr[3])
  console.log(fr)
  // fr4= "o"   //This is not possible

  // for(let i=0;i<fr;i++){
  //   console.log(fr[i]);
  // }
  // Use a for loop to print a string
  let str = "Raffle";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }

