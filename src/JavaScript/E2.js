const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

// We use the spread operator to copy the values into a new array, the value that we want to change gets saved by slicing the array

const replaceAt = (arr, index, newElement) => {

    let arr_i = [...arr];
    let arr_val = [...arr].slice(index, index+1);

    arr_val = newElement;
        
    arr_i[index] = arr_val;

    return arr_i;
};

const result = replaceAt(elements, index, newValue);
console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];