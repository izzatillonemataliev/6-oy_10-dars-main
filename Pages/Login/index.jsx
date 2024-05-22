
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let Email = email.current.value;
    let PassWord = password.current.value;

    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!validateEmail(Email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!validatePassword(PassWord)) {
      newErrors.password = "password 6ta beligidan ko'p bo'lishi shart";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];

    const user = data.filter(({ email, password }) => {
      return email === Email && password === PassWord;
    });

    if (user.length) {
      localStorage.setItem("user", JSON.stringify(true));
      navigate("/layout");
    } else {
      setErrors({ ...newErrors, password: "Incorrect email or password" });
      localStorage.setItem("user", JSON.stringify(false));
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container login-container">
        <div className="box">
          <div className="box-wrapper">
            <div className="logo">
              <p className="p-text">your logo</p>
              <p className="login-h1">login</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="email-div">
                <p className="email">Email</p>
                <input
                  ref={email}
                  className="email-inp"
                  type="email"
                  placeholder="username@gmail.com"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="password-div">
                <p className="password">Password</p>
                <input
                  ref={password}
                  className="password-inp"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                <p className="subtext">Forgot Password?</p>
              </div>
              <button 
               className="submit-btn" type="submit">
                Submit
              </button>
              <p className="last-text">
                Don’t have an account yet?{" "}
                <span className="last-span">Register for free</span>
              </p>
            </form>

            <button type="submit" className="signup-btn">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
