interface Student {
    name: string;
    age: number;
    occupation: string;
}

const Student: Student[] = [
    {
      name: "Patrick Berry",
      age: 25,
      occupation: "Medical scientist",
    },
    {
      name: "Alice Garner",
      age: 34,
      occupation: "Media planner",
    },
  ];
  
  const logStudent = ({ name , age }: Student) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  console.log("Student:");
  Student.forEach(logStudent);