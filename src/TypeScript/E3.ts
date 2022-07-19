interface Teacher {
    name: string;
    age: number;
    subject?: string;
    occupation?: string;
}

const users: Teacher[] = [
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

function isTeacher(user:Teacher) {
    
}

function isStudent(user:Teacher) {
    
}

const logUser = (user: Teacher) => {
    let extraInfo: string = "";
    
    if (user.occupation) {
        extraInfo = user.occupation;
    } else if (user.subject) {
        extraInfo = user.subject;
    }

    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

users.forEach(logUser);