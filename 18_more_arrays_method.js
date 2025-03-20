
    // delete is a operator

    // let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    // delete num[0]
    // console.log(num.length)

    // concate
    // let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    // let num_more = [11, 12, 13, 14, 15, 16, 17, 19]
    // let num_more_even = [211, 212, 213, 214, 125, 216, 217, 219]
    // let newArray = num1.concat(num_more, num_more_even)
    // console.log(newArray)

    // Sort
    // let compare = (a, b) => {
    //   return a - b
    // }
    // let num_s = [121, 122, 31, 224, 15, 26, 721, 128, 119, 120]
    // num_s.sort(compare)
    // console.log(num_s)

    // reverse

    // let num_r = [121, 122, 31, 224, 15, 26, 721, 128, 119, 120]
    // num_r.sort(compare)
    // num_r.reverse()
    // console.log(num_r)

    // splice and slice
    // let num_sp = [121, 122, 31, 224, 15, 26]
    // let deletedValues = num_sp.splice(2, 3, 2101, 1202, 1203)
    // console.log(num_sp)
    // console.log(deletedValues)

    // slice
    let num_sl = [121, 122, 31, 224, 15, 26, 12]
    let newNum = num_sl.slice(3, 5)
    console.log(newNum)
