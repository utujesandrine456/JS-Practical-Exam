const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


let students = [];

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Grade: ${this.grade}`;
    }
}


app.post('/students', (req, res) => {
    try {
        const { name, grade } = req.body;
        
        const newStudent = new Student(name, grade);
        students.push(newStudent);

        res.status(201).json({ 
            message: 'Student added successfully', 
            student: newStudent.getDetails() 
        });

    } catch (error) {
        res.status(500).json({ error: 'Error adding student' });
    }
});


app.get('/students', (req, res) => {
    try {
        const studentDetails = students.map(student => student.getDetails());
        res.json(studentDetails);
        
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving students' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
