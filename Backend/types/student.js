const zod = require('zod');

const userSchema=zod.string().min(2);
const passSchema=zod.string().min(8);
const nameSchema=zod.string().min(2);
const mobileSchema=zod.number().max(10);
const rollSchema=zod.number().max(8);

const studentTypeValidation=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;
    const mobile=req.body.mobile;
    const rollno=req.body.rollno;

    const userValidation = userSchema.safeParse(username);
    const passValidation = passSchema.safeParse(password);
    const nameValidation = nameSchema.safeParse(name);
    const mobileValidation = mobileSchema.safeParse(mobile);
    const rollValidation= rollSchema.safeParse(rollno);

    if(!userValidation.success || !passValidation.success || !nameValidation.success || !mobileValidation.success || !rollValidation.success){
        res.status(403).json({
            msg: "Incorrect input"
        })
    }
    else{
        next();
    }
}