const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    // Saber que tipo de dato es y guardar el tipo de dato para despues devolverlo
    // Pasarlo a array para pasar por todos sus argumentos y sustituir los falsy
    // Devolverlo a valor original
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}