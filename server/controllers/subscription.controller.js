// import { sendMail } from "../middleware/sendMail.js";
import { transporter,sendOtp,mailOptions } from "../middleware/sendMail.js";

const subscription = async (req, res) => {
  try {
    const { email } = req.body;

    await sendOtp(email, mailOptions, transporter);

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export default subscription;
