import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { FormUsage } from "../type/form";
import { signIn } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <AuthForm
      usage={FormUsage.signin}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submit={signIn}
    />
  );
};

export default Signin;
