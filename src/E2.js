const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
    // Creamos copias para no usar los originales
    let arr_i = [...arr];
    let arr_val = [...arr].slice(index, index+1);

    // Cambiamos el valor por el que queremos
    arr_val = newElement;
        
    // Sustituimos la posicion index del array arr_i con el valor newElement_i
    arr_i[index] = arr_val;

    return arr_i;
};

const result = replaceAt(elements, index, newValue);
console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];