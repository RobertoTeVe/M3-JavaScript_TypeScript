const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    // Guardamos el tipo de valor que es para despues entrar en el if por el sitio correcto
    const valueType = Object.prototype.toString.call(arg);

    if (valueType === '[object Array]') {
        // Si es un Array recorremos todos los elementos y movemos los no falsy a uno nuevo para ser devuelto
        let newArr = [];

        arg.forEach(element => { if (element) newArr.push(element); });
            
        return newArr;

    } else if (valueType === '[object Object]') {
        // Si es un Objeto recorremos todos los elementos y movemos los no falsy a uno nuevo para ser devuelto
        let newObj = {};

        for (const key in arg){
            if (arg[key]) newObj[key] = arg[key];
        }

        return newObj;

    } else {
        // Si no es ninguna de las anteriores, devolvemos lo que nos ha enviado
        return arg;
    }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}