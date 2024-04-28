import Navbar from "../../components/Navbar.jsx";
import ContentBox from "../../components/ContentBox.jsx";
import styled from "styled-components";

const PhoneLayoutContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 15rem;
  background: #4bc869;
`;
const HomeHeading = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeading>Buy Phones</HomeHeading>
      <PhoneLayoutContainer>
        <ContentBox />
      </PhoneLayoutContainer>
    </>
  );
};

export default Home;
