import styled from "styled-components";
import { Button } from "@mui/material";

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 3rem;
  padding: 5rem;
  backdrop-filter: blur(2rem);
`;

const PopUpContainer = styled.div`
  height: 10rem;
  background: red;
  width: 10rem;
`;

const PopUp = () => {
  return (
    <MainContainer>
      <Button></Button>
      <PopUpContainer></PopUpContainer>
    </MainContainer>
  );
};

export default PopUp;
