import Otp from "../models/otp.models.js"
import otpGenerator from "otp-generator"
import twilio from "twilio"

const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;
// const twilioClient=new twilio(accountSid,authToken)
export const sendOpt=async(req,res,next)=>{
    try {
        const {email}=req.body
        const otp=otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})
        
        
    } catch (error) {
       return res.status(400).json({success:false,message:error.message})
        
    }
}