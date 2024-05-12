import Navbar from "../../components/Navbar.jsx";
import ContentBox from "../../components/ContentBox.jsx";
import styled from "styled-components";

const MainContainer = styled.div`
  scroll-behavior: smooth;
  padding-top: 8rem;
  background-color: #171717;
`;

const PhoneLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 0.4rem;
  padding: 2rem min(10vw, 15rem);
`;
const HomeHeading = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <HomeHeading></HomeHeading>
        <PhoneLayoutContainer>
          <ContentBox />
        </PhoneLayoutContainer>
      </MainContainer>
    </>
  );
};

export default Home;
