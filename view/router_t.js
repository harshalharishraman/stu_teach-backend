require('dotenv').config();
const exp = require('express');
const c=require('../controls/controller_t');
const rter=exp.Router();

rter.post('/signup_t',c.c_tacc)
rter.get('/login_t',c.l_tacc)
module.exports=rter