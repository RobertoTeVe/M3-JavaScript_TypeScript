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
  
  const logUser = ({ name, age }: Teacher) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  users.forEach(logUser);