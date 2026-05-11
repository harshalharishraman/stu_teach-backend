require("dotenv").config();
const exp=require('express');
const h=require('http');
const e=exp()
const hs=h.createServer(e);
const pt=process.env.port || 4321;
e.use(exp.json());
e.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Meathods','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

const r=require('./view/router');
e.use('/',r);

hs.listen(pt,()=>{
    console.log(`server started and listening at port:${pt}`)
});