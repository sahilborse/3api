const express= require('express');
const router = express.Router();
const User = require("./../models/mongoDB")
router.use(express.urlencoded({extended:true}));

router.get("/getUser",async(req,res)=>{
    try{
    const userData =await User.find();
    res.status(200).json(userData);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});

//No Password hashing performed.
router.post("/postUser",async(req,res)=>{
    try{
    const {username,email,password} = req.body.value;
    console.log(username,email,password)
    const existingUser = await User.findOne({email:email});
    if(!existingUser){
        const newUser  = new User({username:username,email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }else {
        res.status(400).json({ message: 'User already exists' });
    }
    }catch(error){
        res.status(500).json({message:error.message})
    }
});
router.put("/update/:id",async(req,res)=>{
    try {
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, password }, { new: true });
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;