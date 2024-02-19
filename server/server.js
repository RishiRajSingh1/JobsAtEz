import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
<<<<<<< HEAD
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
// import orderRoute from "./routes/order.route.js";
// import conversationRoute from "./routes/conversation.route.js";
// import messageRoute from "./routes/message.route.js";
// import reviewRoute from "./routes/review.route.js";
=======
>>>>>>> origin/Rishi
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: `http://localhost:${process.env.FRONTEND_PORT}`, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
<<<<<<< HEAD
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);
=======
>>>>>>> origin/Rishi

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(process.env.BACKEND_PORT, () => {
  connect();
  console.log("Backend server is running!");
});
