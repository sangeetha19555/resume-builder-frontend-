import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import "../resources/authentication.css";
import "../resources/common.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "./API";
export const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values, "values...", values.password, values.cpassword);
    setLoading(true);

    if (values.password === values.cpassword) {
      try {
        await axios.post(`${API}api/user/register`, values);
        setLoading(false);
        message.success("Registration Successfull");
        navigate("/login");
      } catch (error) {
        setLoading(false);
        message.error("Registration Failed");
      }
    } else {
      console.log("Password Does not Match");
      alert("password Does not Match");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/home");
    }
  });
  return (
    <div className="auth-parent">
      {loading && <Spin size="large" className="loading_spin" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" type="password">
          <Input.Password />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password" type="password">
          <Input.Password />
        </Form.Item>
        <div className="d-flex justify-content-sm-between mb-2">
          <Link to="/login">Click Here To Login</Link>

          <Button type="primary" htmlType="submit" className="blackbutton">
            REGISTER
          </Button>
        </div>
      </Form>
    </div>
  );
};
