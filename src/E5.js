const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    for (let i = 0; i < arg.length(); i++) {
        if (!arg[i]) console.log("It has a falsy element");
        else console.log("No falsy");
    }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}