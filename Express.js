var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false} ));


const students = [];


app.post('/students', (req, res) => {
    const newuser = req.body;

    if(newuser){
        newuser.id = req.body.id;
        newuser.name = req.body.name;
        newuser.grade = req.body.grade;

        students.push(newuser);

        res.status(200).json({ statusCode: 200, message: "User Added successfully!!!" });
    } else{
        res.status(404).json({statusCode: 404, message: "Please check your body" });
    }
})


app.get('/students', (req, res) => {

    res.status(201).json(students);

});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})