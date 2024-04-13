import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: process.env.SMPT_SERVICE,
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  secure: false,
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASSWORD,
  },
});

export const mailOptions = {
  from: {
    name: "JobsAtEz",
    address: process.env.SMPT_USER,
  },
  // Remove 'email' from 'to' and use it separately in 'sendOtp' function
  // You can add additional email addresses if needed
  subject: "Your One-Time Password (OTP) for Password Reset from JobsAtEz",
  text: `Dear [User],

  You recently requested to reset your password. Please use the following One-Time Password (OTP) to complete the password reset process:
  
  OTP: [OTP_Code]
  
  Please enter this OTP on the password reset page within the next [X] minutes to proceed. If you did not request this password reset, please ignore this email.
  
  Thank you,
  JobsAt`,
};

export const sendOtp = async (email, mailOptions, transporter) => {
  try {
    // Set the 'to' field with the provided email
    mailOptions.to = [email];
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent successfully");
  } catch (error) {
    console.log(error);
  }
};