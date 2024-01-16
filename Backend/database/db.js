const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/");

const admin = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

const student = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    rollno: Number,
    mobile: Number

})

const teacher = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    teacherId: String,
    mobile: Number
})

const Admin= mongoose.model('Admin',admin);
const Teacher= mongoose.model('Teacher',teacher);
const Students=mongoose.model('Students',student);

module.exports={
    Admin,
    Teacher,
    Students
}