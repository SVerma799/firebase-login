import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const { user, signUp } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      await signUp(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h1 className="text-center my-3">Sign Up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
