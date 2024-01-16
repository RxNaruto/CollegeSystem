const zod = require('zod');

const userSchema=zod.string().min(2);
const passSchema=zod.string().min(8);
const nameSchema=zod.string().min(2);


const adminTypeValidation=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const nameValidation = nameSchema.safeParse(name);
    const userValidation = userSchema.safeParse(username);
    const passValidation = passSchema.safeParse(password);

    if(!userValidation.success || !nameValidation.success || !passValidation.success ){
        res.status(403).json({
            msg: "Incorrect Input"
        })
    }
    else{
        next();
    }

}

module.exports={
    adminTypeValidation
}
