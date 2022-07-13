const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
    // Creamos copias para no usar los originales
    let arr_i = [...arr];
    let index_i = index;
    let newElement_i = newElement;

    // Sustituimos la posicion index_i del array arr_i con el valor newElement_i
    arr_i[index_i] = newElement_i;

    return arr_i;
};

const result = replaceAt(elements, index, newValue);
console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];