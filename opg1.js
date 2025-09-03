//Opg 1, Sum of numbers
//Skriv en funktion sum, der tager et array af tal som input og returnerer summen af tallene og skal kunne kaldes som nedenstående
// const arr = [];

// function sum(arr){
// for(let i = 0; i< arr.length; i++){
//     sum +=arr[i];    
// }
// return sum
// }
// console.log(sum([1,2,3,4]));

const sum = (sumArr) =>{
    let totaltValue = 0;
    for(let i in sumArr){
        totaltValue += sumArr[i]
    }
     return totaltValue;
};
console.log(sum([1,2,3,4]))