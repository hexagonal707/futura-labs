import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartInfo } from "../Redux/phoneApiSlice.js";

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  color: white;
`;
const Heading = styled.div`
  font-size: 4rem;
  color: #e1e1e1;
  transform: translate(5%, 0%);
  font-weight: normal;
`;

const TickIcon = styled(CheckIcon)`
  text-shadow: 0 0 0.2rem #ffffffaa;
  scale: 400%;
  color: #ffc142;
  transform: translate(-25%, -10%);
`;

const OrderPlaced = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  useEffect(() => {
    dispatch(removeCartInfo());
  }, [dispatch]);
  return (
    <MainContainer>
      <Navbar />
      <Heading>{<TickIcon />} Your order is placed (⌐■_■)</Heading>
    </MainContainer>
  );
};

export default OrderPlaced;
