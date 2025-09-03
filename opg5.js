const reverseString = (str) =>{
let splitstr = str.split("");
let reversearr = splitstr.reverse();
let joinarr = reversearr.join();
console.log(splitstr);
console.log(reversearr);
return joinarr;
 }

console.log(reverseString('JavaScript')); // result = 'tpircSavaJ'