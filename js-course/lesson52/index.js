// constructor = a special method of a class.
//               accepts arguments and assigns properties

class Student{
    
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying!`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);

console.log(`- Student name: ${student1.name}\n- Student age: ${student1.age}\n- Student gpa: ${student1.gpa}`);
student1.study();

console.log(`- Student name: ${student2.name}\n- Student age: ${student2.age}\n- Student gpa: ${student2.gpa}`);
student2.study();