const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { use } = require('passport');
const User=require('../Model/Users-Collection')

module.exports = {
    register:async (req,res)=>{ 
        if(await User.exists({Email:req.body.Email}) == true) return res.status(400).send({message:"Email Exists"});
        bcrypt.hash(req.body.password,10,async (err,hashPassword)=>{
            if(err) return res.status(403).send({message:"this is an error"});
            req.body.password = hashPassword;
            await User.create(req.body)
            .then(result => res.status(200).send({message:"User as been Added",result}))
            .catch(err => res.status(500).send({message:"zzzz",err}))
        })
    },
    login:async (req,res)=>{
        if(User.exists(req.body.Email) == false) return res.status(400).send({message:"User not exist"});
        const {Email,password} = req.body;
        await User.findOne({Email})
        .then(UserItem => bcrypt.compare(password,UserItem.password,(err,isMatch)=>{
            if (err) return res.status(400).send({message:"err try again"})
            if(!isMatch) return res.status(500).send({message:"Password incorrect"})
            jwt.sign({...UserItem},process.env.SECRET_KEY,{expiresIn:"30m"},(err,token)=>{
                if(err) return res.status(400).send({message:"Error"})
                res.status(200).send({message:"Login Sucssefuly",token});
            })
        }) )
        .catch((err)=>{res.status(400).send({message:"error"})})
    }

}
