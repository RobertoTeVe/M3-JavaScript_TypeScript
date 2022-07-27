
const swap = <t1, t2>(arg1: t1, arg2: t2) => {
    const tupleRet: [t2, t1] = [arg2, arg1];
    return tupleRet;
};

let age: number, occupation: string;

[occupation, age] = swap<typeof age, typeof occupation>(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);
