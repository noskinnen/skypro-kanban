import { useEffect, useState } from "react";
import { GlobalStyle } from "../../styled/common/Global.Styled.js";
import { Wrapper } from "../components/Wrapper/Wrapper.jsx";
import { Header } from "../components/Header/Header.jsx";
import { MainContent } from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Outlet } from "react-router-dom";
import { getTasksApi } from "../../api.js";
import { useUser } from "../../Hooks/useUser.jsx";
import { useTasks } from "../../Hooks/useTasks.jsx";

export default function MainPage() {
  const { isLoggedInUser } = useUser();
  const { setTasks } = useTasks();
  const [getCardsIsLoaded, setGetCardsIsLoaded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  useEffect(() => {
    getTasksApi({ token: isLoggedInUser.token })
      .then((data) => {
        setTasks(data.tasks);
      })
      .catch((error) => {
        setGetCardsError(error.message);
      })
      .finally(() => {
        setGetCardsIsLoaded(false);
      });
  }, [isLoggedInUser, setTasks]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header user={isLoggedInUser} />
        {getCardsError ? (
          <p style={{ color: "red" }}>{getCardsError}</p>
        ) : (
          <MainContent isLoaded={getCardsIsLoaded} />
        )}
      </Wrapper>
    </>
  );
}
