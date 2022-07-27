
interface Student {
    name: string;
    age: number;
    occupation: string;
}

const students: Student[] = [
    {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
    },
    {
        name: "Emily Coleman",
        age: 25,
        occupation: "English",
    },
    {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
    },
    {
        name: "Bruce Willis",
        age: 39,
        occupation: "Placement officer",
    },
];

const filterStudentsBy = (students: Student[], criteria: Object): Student[] => {

    return students.filter((user) => {

        const criteriaKeys = Object.keys(criteria);

        return criteriaKeys.every((fieldName) => {

            return criteria[fieldName] === user[fieldName];
        });
    });
};

const LogStudent = ({ name, occupation }: Student) => {
    console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(students, {age : 35}).forEach(LogStudent);