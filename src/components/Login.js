import React from "react";

import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Login = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right" style={{ background: " #D6CCEB" }}>
      <form className="form" onSubmit={handleSubmit}>
        <span className="close-btn" style={{ background: "#D6CCEB" }}>
          <Link to="/">X</Link>
        </span>
        <div className="shift">
          <h5 className="donthaveaccount" style={{ color: "#fff" }}>
            Don't have an account?
          </h5>
          <button
            className="form-input-btn"
            id="d1"
            type="submit"
            style={{ background: "#FDFFAB" }}
          >
            <Link
              to="/form"
              style={{ color: "#595959", width: "80px", height: " 40px" }}
            >
              SignUp!
            </Link>
          </button>
        </div>

        <div className="form-inputs">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i style={{ width: "25px" }}>
                  <AiOutlineMail />
                </i>
              </span>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="email/phone"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div className="form-inputs">
          <div className="input-group" mb-3>
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock cust" aria-hidden="true"></i>
              </span>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>

        <button
          className="form-input-btn"
          type="submit"
          style={{ background: "#FDFFAB", color: "#595959" }}
        >
          <Link to="/">Login</Link>
        </button>
        <span className="form-input-login">
          <Link to="/" style={{ color: "#fff" }}>
            Forgot your password?
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
