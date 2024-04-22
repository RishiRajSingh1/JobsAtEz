import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./success.scss";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  return (
  <>
    <div className="successpage">
      <div className="left">
        <img src="./images/success.jpg" alt="" />
      </div>
      <div className="right">
        <h3>Payment Received Successfully</h3>
        <img src="./images/tick.jpg" alt="" />
        <p>Redirecting To The Orders Page! Please Wait...</p>
      </div>
    </div>
    </>
  );
};

export default Success;
