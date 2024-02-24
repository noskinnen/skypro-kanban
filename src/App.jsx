import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./lib/approutes";
import { Routes, Route } from "react-router-dom";
import ExitPage from "./Pages/ExitPage/ExitPage.jsx";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import TaskPage from "./Pages/TaskPage/TaskPage.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";

function App() {
  const [user, setUser] = useState(true);

  function login() {
    setUser(true);
  }

  function logout() {
    setUser(false);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.TASK} element={<TaskPage />} />
        <Route path={AppRoutes.EXIT} element={<ExitPage logout={logout} />} />
      </Route>
      <Route path={AppRoutes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;