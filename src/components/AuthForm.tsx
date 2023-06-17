import { Dispatch, SetStateAction, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FormUsage } from "../type/form";
import { FormData } from "../type/form";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  usage: FormUsage;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  submit: (formData: FormData) => Promise<AxiosResponse>;
}

const AuthForm = ({
  usage,
  email,
  password,
  setEmail,
  setPassword,
  submit,
}: Props) => {
  const navigate = useNavigate();

  const handleSubmit = () =>
    submit({ email, password })
      .then((res) => {
        if (usage === FormUsage.signin) {
          navigate("/signup");
        } else {
          localStorage.setItem("token", JSON.stringify(res.data));
          navigate("/todo");
        }
      })
      .catch((err) => {
        alert(err);
      });

  return (
    <Form className="w-25 h-25 m-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          data-testid="email-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          type="password"
          data-testid="password-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        data-testid={`${usage}-button`}
        disabled={!(email.includes("@") && password.length >= 8)}
      >
        Submit
      </Button>
    </Form>
  );
};
export default AuthForm;
