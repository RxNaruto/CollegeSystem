const zod = require('zod');

const userSchema=zod.string().min(2);
const passSchema=zod.string().min(8);
const nameSchema=zod.string().min(2);
const mobileSchema=zod.number().max(10);
const teacherIdSchema=zod.string().max(6);

const teacherTypeValidation=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;
    const mobile=req.body.mobile;
    const teacherId=req.body.teacherId;

    const userValidation = userSchema.safeParse(username);
    const passValidation = passSchema.safeParse(password);
    const nameValidation = nameSchema.safeParse(name);
    const mobileValidation = mobileSchema.safeParse(mobile);
    const teacherIdValidation= teacherIdSchema.safeParse(teacherId);

    if(!userValidation.success || !passValidation.success || !nameValidation.success || !mobileValidation.success || !teacherIdValidation.success){
        res.status(403).json({
            msg: "Incorrect input"
        })
    }
    else{
        next();
    }
}