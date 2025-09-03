
countVowels = (String) =>{
    const vowels = 'aeiouyæøåAEIOUYÆØÅ'
    let count = 0
    for (char of String){
        if (vowels.includes(char)){
            count++
        }
    }
        
        return count
    } 
    

console.log(countVowels('Åge bøjede syv fine rør ud.')); // count = 10