
  N=> Null
  N=>number
  S=> symbol
  S=>String
  B=>Boolean
  B=>BigInt
  U=>Undefined

    let a = null;
    let b = 345;
    let c = true;
    let d = BigInt("567");
    let e = "waheed";
    let f = Symbol(" I am nice symbiol");
    let g = undefined;
    console.log(a, b, c, d, e, f, g)
    console.log(typeof d)

    //non-primitive datatype - objects
    const item = {
      "waheed": true,
      "name": false,
      "malik": 22,
      "age": undefined,
    }
    console.log(item)
 