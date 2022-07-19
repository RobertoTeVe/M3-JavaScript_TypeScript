var Student = [
    {
        name: "Patrick Berry",
        age: 25,
        occupation: "Medical scientist"
    },
    {
        name: "Alice Garner",
        age: 34,
        occupation: "Media planner"
    },
];
var logStudent = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("  - ".concat(name, ", ").concat(age));
};
console.log("Student:");
Student.forEach(logStudent);
