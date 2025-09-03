const filterOdd = (numbers) => {
    const oddnumbers = numbers.filter(Number => Number % 2);
    return oddnumbers;
}
console.log(filterOdd([1, 2, 3, 4, 5])); // result = [1, 3, 5]