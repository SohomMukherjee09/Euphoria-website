const path = require("path");
const aschema = require("../db/admindb.js");
const bcrypt = require("bcrypt")
const fs = require("fs");

module.exports = {

    async addadmin(req,res){
        
        const salt = await bcrypt.genSalt(10);
        const hp = await bcrypt.hash("1234",salt);
        var ins={
            name:"ewfd",
            email:"test",
            password:hp
        }

            await aschema.create(ins);
            res.json({msg:"Admin Created"});

    }  ,
    async login(req,res){
        var e = req.body.email;
        var p = req.body.pass;
        var data = await aschema.findOne({email:e})

        if(data != null){

            bcrypt.compare(p,data.password,(err,result)=>{
                if(err){
                    throw err
                }
                else{
                    if(result){

                        var udata = {
                            name:data.name,
                            id:data.id
                        }
                        res.json(udata)
                    }else{
                        res.json({msg:"Invaild Password"})
                    }
                }
            }) 

        }else{
            res.json({msg:"Invaild Email"})
        }
    }               
  
};
