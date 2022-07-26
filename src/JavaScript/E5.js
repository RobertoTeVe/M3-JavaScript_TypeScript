const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
    // We save the value type 
    const valueType = Object.prototype.toString.call(arg);

    if (valueType === '[object Array]') {
        // If its an Array, we go over all the elements and if its falsy, it gets removed
        let newArr = [];

        arg.forEach(element => { if (element) newArr.push(element); });

        return newArr;

    } else if (valueType === '[object Object]') {
        // If its an Object, we go over all the elements and if its falsy, it gets removed
        let newObj = {};

        for (const key in arg) {
            if (arg[key]) newObj[key] = arg[key];
        }

        return newObj;

    } else {
        // If it's another type of value, we return it as it is
        return arg;
    }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}