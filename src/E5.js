const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    const compact = (arg) => { 
        if (typeof arg != "object") return arg;
        else return "Nope";
    };
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}