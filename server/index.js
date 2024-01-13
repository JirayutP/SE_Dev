const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.Connection('mongodb+srv://6432022721:6432022721@vacqcluster.27jtaap.mongodb.net/VacQ?retryWrites=true&w=majority')

const UserSchema = new mongoose.Schema({
    name: String,
    age:Number
})

const UserModel = mongoose.model("users", UserSchema)

app.get("/getUser", (req,res) => {
    res.json(UserModel.find())
})

app.listen(3001, () => {
    console.log("server is running")
})