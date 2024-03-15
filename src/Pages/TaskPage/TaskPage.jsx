import { useState } from "react";
import * as S from "./TaskPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { useTask, useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/approutes";
import { postTodo } from "../../api";
import Calendar from "../../components/Calendar/Calendar";

export default function TaskPage() {
  const { user } = useUser();

  const { putDownTask } = useTask();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const handleFormSubmit = async () => {
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    console.log(taskData);
    await postTodo({
      task: taskData,
      token: user.token,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; 

    setNewTask({
      ...newTask, 
      [name]: value, 
    });
  };
  const handleTask = async (taskData) => {
    await postTodo(taskData).then((data) => {
      console.log(data);
      putDownTask(data.task);
      navigate(appRoutes.MAIN);
    });
  };
  const creatTaskBtn = (taskData) => {
    handleFormSubmit(taskData);
    handleTask(taskData);
  };
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={appRoutes.MAIN}>
              {" "}
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
          </S.PopNewCardContent>

          <S.PopNewCardWrap>
            <S.PopNewCardForm className="form-new" id="formNewCard" action="#">
              <S.FormNewBlock>
                <S.Sbttl htmlFor="formTitle">Название задачи</S.Sbttl>
                <S.FormNewInput
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </S.FormNewBlock>
              <S.FormNewBlock>
                <S.Sbttl htmlFor="textArea">Описание задачи</S.Sbttl>
                <S.FormNewArea
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></S.FormNewArea>
              </S.FormNewBlock>
            </S.PopNewCardForm>

            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </S.PopNewCardWrap>

          <S.CategoriesThemes>
            <S.CategoriesP>Категория</S.CategoriesP>
          </S.CategoriesThemes>
          <S.CategoriesThemes>
            <input
              type="radio"
              id="radio1"
              name="topic"
              value="Web Design"
              onChange={handleInputChange}
            />
            <S.WebDesignLabel htmlFor="radio1">Web Design</S.WebDesignLabel>

            <input
              type="radio"
              id="radio2"
              name="topic"
              value="Research"
              onChange={handleInputChange}
            />
            <S.ResearchLabel htmlFor="radio2">Research</S.ResearchLabel>

            <input
              type="radio"
              id="radio3"
              name="topic"
              value="Copywriting"
              onChange={handleInputChange}
            />
            <S.CopywritingLabel htmlFor="radio3">
              Copywriting
            </S.CopywritingLabel>
          </S.CategoriesThemes>
          <S.ButtonDiv>
            <S.FormNewCreatButton onClick={creatTaskBtn} id="btnCreate">
              Создать задачу
            </S.FormNewCreatButton>
          </S.ButtonDiv>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}