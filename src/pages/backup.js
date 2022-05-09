import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const onFinish = (e) => {
    e.preventDefault();
    const newuser = {
      username: username,
      password: password,
    };
    console.log(newuser);
  };
  return (
    <div className="register container mt-5">
      <form onSubmit={onFinish}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="useremail"
            name="useremail"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="userpassword"
            name="userpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          REGISTER
        </button>
      </form>
      {/* <Form onFinish={onFinish}>
        <Form.Item name="username" label="username">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form> */}
    </div>
  );
};
