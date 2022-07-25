const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

// Creamos la copia del array, guardamos el valor a cambiar, lo cambiamos y lo sustituimos en el array copiado para despues devolverlo

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