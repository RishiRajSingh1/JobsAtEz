import mongoose from "mongoose";
const { Schema } = mongoose;

const OtpSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpiration: {
    type: Date,
    default:Date.now,
    get:(otpExpiration)=>otpExpiration.getTime(),
    set:(otpExpiration)=>new Date(otpExpiration),
    required: true,
  },
},{
  timestamps:true
});

export default mongoose.model("Otp", OtpSchema)