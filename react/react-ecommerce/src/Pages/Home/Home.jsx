import Navbar from "../../components/Navbar.jsx";
import ContentBox from "../../components/ContentBox.jsx";
import styled from "styled-components";

const MainContainer = styled.div`
  padding-top: 5rem;
  background-color: #ededed;
`;

const PhoneLayoutContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem min(10vw, 15rem);
  /* background: #333333ff;*/
`;
const HomeHeading = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <HomeHeading>Buy Phones</HomeHeading>
        <PhoneLayoutContainer>
          <ContentBox />
        </PhoneLayoutContainer>
      </MainContainer>
    </>
  );
};

export default Home;
