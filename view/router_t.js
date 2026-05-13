require('dotenv').config();
const exp = require('express');
const c=require('../controls/controller_t');
const rter=exp.Router();
const t=require('../model/tok_gen')
rter.use(t.jwt_verify)
rter.post('/signup_t',c.c_tacc)
rter.get('/login_t',c.l_tacc)
module.exports=rter