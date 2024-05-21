import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTask, setDescription, setTitle } from "../../Redux/taskSlice.js";
import { Add, CloseOutlined } from "@mui/icons-material";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  background: #dddddd;
  height: max(100%);
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0 2rem 0 2rem;
  outline: 0.1rem solid #00000020;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.form`
  position: fixed;
  z-index: 5;
  flex-direction: column;
  align-items: end;
  padding: 1rem 1rem 1rem 1.5rem;
  width: 25rem;
  height: 30rem;
  background: #ffffff;
  border-radius: 0.6rem;
  box-shadow: 0 0 0.6rem #00000020;
  outline: 0.1rem solid #00000044;
`;

const TitleInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const DescriptionInput = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  height: 20rem;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
`;

const StyledButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddTaskButton = styled.div`
  position: fixed;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  bottom: 5%;
  right: 5%;
  padding: 1rem 3rem;
  user-select: none;
  cursor: pointer;
  border-radius: 0.8rem;
  /*border: 0.1rem solid #343a49;*/
  background: #e6e6e6;
  color: #00000055;
  box-shadow: 0 0 0.5rem #00000044;

  &:hover {
    outline: 0.1rem solid #00000022;
    color: #000000aa;
  }
`;

const BtnClose = styled.div`
  display: block;
  scale: 80%;
  z-index: 3;
  align-content: end;
  width: fit-content;
  padding: 0.3rem 0.3rem 0 0.3rem;
  margin: 0;
  border-radius: 10rem;

  &:hover {
    cursor: pointer;
    outline: 0.1rem solid #00000044;
    color: white;
    background: #f33c5c;
  }
`;

const BlurContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #00000022;
`;

const Home = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.taskData.title);
  const description = useSelector((state) => state.taskData.description);
  const taskListInfo = useSelector((state) => state.taskData.taskListInfo);

  function handleShowContainer() {
    setShowMainContainer("fixed");
    return showContainer === "none"
      ? setShowContainer("flex")
      : setShowContainer("none");
  }

  const handleAddTask = () => {
    if (title && description) {
      dispatch(addTask({ title, description }));
      dispatch(setTitle(""));
      dispatch(setDescription(""));
      setShowContainer("none");
    }
  };

  function handleCloseTaskContainer() {
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    setShowMainContainer("absolute");
    return showContainer === "none"
      ? setShowContainer("flex")
      : setShowContainer("none");
  }

  const [showContainer, setShowContainer] = useState("none");
  const [showMainContainer, setShowMainContainer] = useState("absolute");

  return (
    <MainContainer style={{ position: `${showMainContainer}` }}>
      <AddTaskButton type="button" onClick={() => handleShowContainer()}>
        <Add style={{ scale: "110%" }} />
      </AddTaskButton>
      <BlurContainer style={{ display: `${showContainer}` }}>
        <FormContainer style={{ display: `${showContainer}` }}>
          <BtnClose type="button" onClick={() => handleCloseTaskContainer()}>
            <CloseOutlined />
          </BtnClose>

          <TitleInput
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
          <DescriptionInput
            type="text"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
          <StyledButton type="button" onClick={handleAddTask}>
            Add
          </StyledButton>
        </FormContainer>
      </BlurContainer>

      {taskListInfo.length > 0 &&
        taskListInfo.map((task, index) => {
          return (
            <>
              <DisplayContainer key={index}>
                <div key={index}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
              </DisplayContainer>
            </>
          );
        })}
    </MainContainer>
  );
};

export default Home;
