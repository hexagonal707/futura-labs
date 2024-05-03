import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
  background: #5c5c5c1c;
  width: 100%;
  position: fixed;
  height: 100%;
`;

const TaskLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtnClosePopUp = styled.button`
  width: max-content;
  border-radius: 0.5rem;
  border: none;
  background: black;
  color: white;
  padding: 0.7rem 2rem;
`;

const PopUpBlurContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  /*backdrop-filter: blur(0.2rem);*/
`;

const PopUpMainContainer = styled.div`
  display: flex;
  inset: 0;
  margin: auto;
  border-radius: 1rem;
  height: 70%;
  width: 30rem;
  outline: 0.1rem solid #8e8e8e;
  background: white;
  box-shadow: 0 0 8rem #cdcdcd;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const InputGridContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 10fr;
`;

const TitleInputContainer = styled.textarea`
  color: #353535;
  border: 0.1rem solid #e8e8e821;
  border-radius: 1rem 1rem 0 0;
  outline: 0;
  padding: 0.7rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  width: 100%;
  resize: none;
  background: rgba(46, 46, 46, 0.12);
`;
const DescriptionInputContainer = styled.textarea`
  color: #353535;
  border: 0.1rem solid #e8e8e821;
  border-radius: 0 0 1rem 1rem;
  outline: 0;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  height: 100%;
  width: 100%;
  resize: none;
  background: rgba(46, 46, 46, 0.12);
`;

/*const BtnAddTaskTest = styled.button``;
const BtnDelTaskTest = styled.button``;*/
const Home = () => {
  /* const taskList = [];
  
                                                                                                                                 const taskData = {
                                                                                                                                   id: (taskList.length = taskList.length + 1),
                                                                                                                                   title: "",
                                                                                                                                   description: "",
                                                                                                                                 };
  
                                                                                                                                 const [popUpState, setPopUpState] = useState(null);
                                                                                                                                 const [titleState, setTitleState] = useState("");
                                                                                                                                 const [descriptionState, setDescriptionState] = useState("");
  
                                                                                                                                 console.log(taskList[0]);
  
                                                                                                                                 function closeTaskWindow() {
                                                                                                                                   return setPopUpState(null);
                                                                                                                                 }*/

  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask(id, titleState, descriptionState) {
    return {
      id: id,
      title: titleState,
      description: descriptionState,
    };
  }

  return (
    <MainContainer>
      {/* {popUpState}
      <BtnClosePopUp
        onClick={() => {
          return setPopUpState(
            <PopUpBlurContainer>
              <PopUpMainContainer>
                <FormContainer>
                  <InputGridContainer key={taskList.length++}>
                    <TitleInputContainer
                      onChange={(event) => {
                        setTitleState((taskData.title = event.target.value));
                      }}
                      placeholder="Title"
                      type="text"
                      id="title"
                    />

                    <DescriptionInputContainer
                      onChange={(event) => {
                        setDescriptionState(
                          (taskData.description = event.target.value),
                        );
                      }}
                      placeholder="Type something..."
                      type={"text"}
                      id="description"
                    />
                  </InputGridContainer>
                  <div>
                    <BtnClosePopUp
                      onClick={() => {
                        return closeTaskWindow();
                      }}
                    >
                      Close
                    </BtnClosePopUp>
                    <BtnAddTaskTest
                      onClick={() => {
                        console.log(taskData);
                        return taskList.push(taskData);
                      }}
                    >
                      Add
                    </BtnAddTaskTest>
                    <BtnDelTaskTest>Delete</BtnDelTaskTest>
                  </div>
                </FormContainer>
              </PopUpMainContainer>
            </PopUpBlurContainer>,
          );
        }}
      >
        Add Task
      </BtnClosePopUp>
*/}
      <TaskLayoutContainer>
        <div>
          <input
            onChange={(event) => setTitleState(event.target.value)}
            placeholder="title"
            type="text"
          />
          <input
            onChange={(event) => setDescriptionState(event.target.value)}
            placeholder="description"
            type="text"
          />
          <button
            onClick={() => {
              taskList.push(
                setTaskList([addTask("", titleState, descriptionState)]),
              );

              /* setTaskList([addTask("", titleState, descriptionState)]);
                             console.log(taskList);*/
            }}
          >
            Add
          </button>
        </div>

        {/* Displaying task list */}
        <div>
          {taskList.map((task, index) => (
            <div key={index}>
              <div>{index}</div>
              <div>Title: {task.title}</div>
              <div>Description: {task.description}</div>
            </div>
          ))}
        </div>
      </TaskLayoutContainer>
    </MainContainer>
  );
};

export default Home;
