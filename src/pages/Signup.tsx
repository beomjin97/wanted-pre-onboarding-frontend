import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { FormUsage } from "../type/form";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, []);

  return (
    <AuthForm
      usage={FormUsage.signup}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submit={signup}
    />
  );
};

export default Signup;
