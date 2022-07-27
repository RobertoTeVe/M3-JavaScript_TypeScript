
interface Teacher {
    name: string;
    age: number;
    subject?: string;
    occupation?: string;
}

interface Student {
    name: string;
    age: number;
    occupation: string;
}

const Users: any = [
    {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
    },
    {
        name: "Jane Doe",
        age: 41,
        subject: "English",
    },
    {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
    },
    {
        name: "Bruce Willis",
        age: 39,
        subject: "Biology",
    },
];

function isStudent(user:Student) {
    return user.occupation;
}

function isTeacher(user:Teacher) {
    return user.subject;
}

const LogUser = (user: any) => {
    let extraInfo: string;
    if (user.occupation) {
        extraInfo = user.occupation;
    } else {
        extraInfo = user.subject;
    }
    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

const logPerson = (user: any) => {
    
    console.log(`  - ${user.name}, ${user.age}, ${isStudent(user) || isTeacher(user)}`);
}

Users.forEach(LogUser);
Users.forEach(logPerson);