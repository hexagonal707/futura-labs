import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";

//Style Components
const MainContainer = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
`;

const SignUpBackground = styled.div`
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
  border: 0.1rem solid #e8e8e820;
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
const BtnSignUp = styled.button`
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

const ExistingAccount = styled.div`
  margin: 1.5rem 0 1rem 0;
  text-align: center;
  color: #e1e1e1ff;
  font-weight: bold;
  font-size: small;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const BtnLogin = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #5fa2ff4c;
  border-radius: 2rem;
  padding: 0.5rem;
  text-align: center;
  background: rgba(56, 99, 158, 0.35);
  color: #cde1fd;
  font-weight: bold;
  margin-top: 0.5rem;
  text-decoration: none;
  /*box-shadow: 0 0 0.5rem #1f1f1f44;*/

  &:hover {
    background: rgba(83, 142, 237, 0.35);
    border: 0.1rem solid #5fa2ff5a;
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <MainContainer>
        <SignUpBackground>
          <p>
            SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp
            SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp
            SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp SignUp
            SignUp SignUp SignUp SignUp SignUp SignUp
          </p>
        </SignUpBackground>

        <Heading>
          SignUp <br /> &emsp; &nbsp; SignUp <br /> SignUp
        </Heading>

        <FormContainer>
          <div>
            <InputContainer
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              id="firstName"
            />
          </div>
          <div>
            <InputContainer
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              id="lastName"
            />
          </div>
          <div>
            <InputContainer
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              type="number"
              id="phone"
            />
          </div>
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
          <BtnSignUp onClick={submit}>Sign Up</BtnSignUp>

          <div>
            <ExistingAccount>Already have an account?</ExistingAccount>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <BtnLogin>Login</BtnLogin>
            </Link>
          </div>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default SignUp;
