require('dotenv').config();
const exp = require('express');
const tk=require('../model/tok_gen')
const c=require('../controls/controller_t');
const rter=exp.Router();

rter.post('/login_t',c.l_tacc)
rter.post('/signup_t',c.c_tacc)
rter.post('/refresh',tk.refresh)
module.exports=rter

