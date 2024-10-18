import { useState } from "react";
import AuthPageContainer from "../components/AuthPageContainer";
import LoginForm from "../components/LoginForm";

function Login() {
  const [errorMessage, setErrorMessage] = useState();

  const handleError = (error) => {
    setErrorMessage(error);
  };

  return (
    <AuthPageContainer
      error={errorMessage}
      path="/register"
      text="Ainda não tem conta?"
      title="Criar conta"
    >
      <LoginForm onError={handleError} />
    </AuthPageContainer>
  );
}

export default Login;
