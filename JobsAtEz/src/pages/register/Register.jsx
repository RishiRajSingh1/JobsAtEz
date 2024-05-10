import React, { useState, useRef } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phone: "", // Added phone field
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSeller = (e) => {
    setUser((prev) => ({ ...prev, isSeller: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (formRef.current.reportValidity()) {
      const url = await upload(file);
      try {
        await newRequest.post("/auth/register", {
          ...user,
          img: url,
        });
        navigate("/");
        alert("Register Successful");
      } catch (err) {
        console.log(err);
      }
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className="register">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <Input
            name="username"
            type="text"
            placeholder="YourName"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="youremail@email.com"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="sample@1345"
            onChange={handleChange}
            required
          />
          <label htmlFor="file">Profile Picture</label>
          <Input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <label htmlFor="country">Country</label>
          <Input
            name="country"
            type="text"
            placeholder="India"
            onChange={handleChange}
            required
          />
        </div>
        <div className="right">
          <div className="toggle">
            <label htmlFor="isSeller">Activate Your seller account</label>
            <label className="switch">
              <input
                name="isSeller"
                type="checkbox"
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <Input
            name="phone"
            type="text"
            placeholder="+91 999 999 9999"
            onChange={handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea style={{height: "100px"}}
            placeholder="A short description of yourself"
            name="desc"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={formSubmitted}>
            {formSubmitted ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
