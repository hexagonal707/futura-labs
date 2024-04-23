import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";

//Styled Components
const MainContainer = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
`;

const LoginBackground = styled.div`
  position: fixed;
  top: 25%;
  font-weight: bolder;
  text-align: center;
  color: #2f2f2faa;
  font-size: 3rem;
  z-index: 0;
  scale: 500%;
`;

const Heading = styled.div`
  position: fixed;
  font-size: 15rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 0;
`;

const FormContainer = styled.div`
  border-radius: 2rem;
  outline: solid 0.1rem #c9c9c944;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  height: max-content;
  backdrop-filter: blur(1.3rem);
`;

const InputContainer = styled.input`
  color: #e6e6e6;
  margin: 0.369rem 0;
  border: 0.1rem solid #e8e8e821;
  border-radius: 2rem;
  outline: 0;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  width: 20rem;
  background: #2e2e2eaa;

  &:focus {
    border: 0.1rem solid rgba(232, 232, 232, 0.44);
  }

  &:hover {
    border: 0.1rem solid rgba(232, 232, 232, 0.44);
  }
`;
const BtnLogin = styled.button`
  background: #0a0a0a7f;
  color: #e1e1e1d0;
  border: 0.1rem solid #3f3f3f;
  padding: 0.7rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    transition: 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.75);
    border: 0.1rem solid #808080;
    color: #e1e1e1ff;
    cursor: pointer;
  }
`;

const BtnForgotPassword = styled.button`
  background: transparent;
  border: 0;
  margin: 0 0.8rem 1rem 0;
  text-align: right;
  color: #dadada;
  font-weight: bold;
  font-size: small;
  text-shadow: 0 0 0.5rem #1f1f1f44;

  &:hover {
    cursor: pointer;
    text-decoration: #dadada underline;
  }
`;

const BtnCreateAcc = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #00ff8c4c;
  border-radius: 2rem;
  padding: 0.5rem;
  text-align: center;
  background: #00ff8c16;
  color: #00ff8c;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #00ff8c30;
    border: 0.1rem solid #00ff8c5a;
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log("Email", email);
    console.log("Password", password);
  };

  return (
    <div className="hello">
      <MainContainer>
        <LoginBackground>
          <p>
            Login Login Login Login Login Login Login Login Login Login Login
            Login Login Login Login Login Login Login Login Login Login Login
            Login Login Login Login Login Login Login Login Login Login Login
            Login Login Login
          </p>
        </LoginBackground>

        <Heading>
          Login <br /> &emsp; &nbsp; &nbsp; Login <br /> Login
        </Heading>

        <FormContainer>
          <div>
            <InputContainer
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              id="email"
            />
          </div>
          <div>
            <InputContainer
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              id="password"
            />
          </div>

          <BtnLogin onClick={submit}>Log In</BtnLogin>
          <BtnForgotPassword>Forgot Password?</BtnForgotPassword>

          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <BtnCreateAcc>Create an account</BtnCreateAcc>
          </Link>
        </FormContainer>
      </MainContainer>
    </div>
  );
};

export default Login;
