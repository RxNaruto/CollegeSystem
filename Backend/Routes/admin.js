const {Router} = require("express");
const router = Router();
const {AdminTypeValidation} = require("../types/admin");
const {Admin,Students,Teacher} = require("../database/db");

router.post("/createAdmin",AdminTypeValidation,async (req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        name: name,
        username: username,
        password: password
    })

    res.json({
        msg: "The admin has been created successfully"
    })

})

router.get()