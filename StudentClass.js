class Student {

    constructor(name, grade){
        this.name = name;
        this.grade = grade; 
        this.getDetails = function(){
            console.log(`Name: ${this.name} , Grade: ${this.grade}`);
        }
    }

}


var Student1 = new Student("Alice", 85);

console.log("Hurray, Welcome back " + Student1.name);

Student1.getDetails();
