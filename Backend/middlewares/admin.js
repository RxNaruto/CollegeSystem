const jwt = require('jsonwebtoken');
const {JWT_SECRET}=require('../config');

const adminAuthMiddleware=async (req,res,next)=>{
    const username=req.headers.username;
    const password=req.headers.password;

    const checkAdmin=await Admin.findOne({
        username,
        password
    })
    if(checkAdmin){
        next();
    }
    else{
        res.status(404).json({
            msg:"You are not authorized"
        })
    }

}

const adminTokenVerfication=(req,res,next)=>{
    const token =req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }

}