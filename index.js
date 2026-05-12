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
console.log('start of .use of router');
const r=require('./view/router');
e.use('/',r);
console.log('end of .use of router');

console.log('start of .use of router_t');
const r_t=require('./view/router_t')
e.use('/',r_t);
console.log('end of .use of router_t');

hs.listen(pt,()=>{
    console.log(`server started and listening at port:${pt}`)
});