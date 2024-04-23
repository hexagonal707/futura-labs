import { styled } from "styled-components";
import { Link } from "react-router-dom";

//Styled Components
const MainContainer = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
`;

const BackgroundPattern = styled.div`
  position: fixed;
  top: 25%;
  font-weight: bolder;
  text-align: center;
  color: #2f2f2fcc;
  font-size: 3rem;
  z-index: 0;
  scale: 500%;
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

const Heading = styled.div`
  font-size: 2.5rem;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 1rem;
`;

const BtnPaths = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-align: center;
  background: #0a0a0a7f;
  color: #e1e1e1d0;
  border: 0.1rem solid #3f3f3f;
  font-weight: bold;

  &:hover {
    transition: 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.75);
    border: 0.1rem solid #808080;
    color: #e1e1e1ff;
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <div className="hello">
      <MainContainer>
        <BackgroundPattern>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              atque commodi ipsa, labore nesciunt possimus rem? Accusamus animi,
              asperiores beatae enim eos fugiat iste minus molestias nesciunt
              quaerat quo saepe?
            </span>
          </p>
        </BackgroundPattern>

        <FormContainer>
          <Heading>Home</Heading>

          <Row>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <BtnPaths>Login</BtnPaths>
            </Link>

            <Link to={"/usereducer"} style={{ textDecoration: "none" }}>
              <BtnPaths>useReducer</BtnPaths>
            </Link>
            <Link to={"/useMemo"} style={{ textDecoration: "none" }}>
              <BtnPaths>useMemo</BtnPaths>
            </Link>
          </Row>
          <Row>
            <Link to={"/reactmemo"} style={{ textDecoration: "none" }}>
              <BtnPaths>reactMemo</BtnPaths>
            </Link>
            <Link to={"/usecallback"} style={{ textDecoration: "none" }}>
              <BtnPaths>useCallback</BtnPaths>
            </Link>
            <Link to={"/redux"} style={{ textDecoration: "none" }}>
              <BtnPaths>Redux</BtnPaths>
            </Link>
          </Row>
          <Row>
            <Link to={"/reactquery"} style={{ textDecoration: "none" }}>
              <BtnPaths>reactQuery</BtnPaths>
            </Link>
            <Link to={"/usecallback"} style={{ textDecoration: "none" }}>
              <BtnPaths>useCallback</BtnPaths>
            </Link>
            <Link to={"/redux"} style={{ textDecoration: "none" }}>
              <BtnPaths>Redux</BtnPaths>
            </Link>
          </Row>
        </FormContainer>
      </MainContainer>
    </div>
  );
};

export default Home;
