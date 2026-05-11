require('dotenv').config()
const m=require('../model/models')
const re=require('../resvo.res')
class control_panel{
    static async c_student(req,res){
       try {
         const s=await m.create_s(req.body);
         if(!s){
            return res.status(409).json(new re(null,409,'student with such roll already exists'));
         }
         res.status(201).json(new re(s,201,'added student'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
    static async g_all(req,res){
       try {
         const s=await m.get_all();
         if(!s){
            return res.status(404).json(new re(null,404,'no students found'));
         }
         res.status(200).json(new re(s,200,'extracted all students data'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
    static async gby_rn(req){
       try {
         const s=await m.getby_rn(req.params.roll_no);
         if(!s){
            return res.status(404).json(new re(null,404,'no student with such roll exists'));
         }
         res.status(200).json(new re(s,200,'extracted the students data'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
    static async udtby_rn(req,res){
       try {
         const s=await m.udate_byid(req.params.roll_no,nname);
         if(!s){
            return res.status(404).json(new re(null,404,'no student with such roll exists'));
         }
         res.status(200).json(new re(s,200,'extracted the students data'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
    static async dby_rn(req,res){
       try {
         const s=await m.del_byid(req.params.roll_no);
         if(!s){
            return res.status(404).json(new re(null,404,'no student with such roll exists'));
         }
         res.status(200).json(new re(s,200,'deleted the students data'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
    static async d_all(req,res){
       try {
         const s=await m.del_all();
         if(!s){
            return res.status(404).json(new re(null,404,'no students found'));
         }
         res.status(200).json(new re(s,200,'deleted all student data'));
       } catch (error) {
        res.status(500).json(new re(null,500,'internal server error'));
       }
    }
}
module.exports=control_panel;
