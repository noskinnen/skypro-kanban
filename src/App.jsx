import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./lib/approutes";
import MainPage from "./Pages/MainPage/MainPage";
import NotFoundPage404 from "./Pages/NotFoundPage/NotFoundPage";
import SignInPage from "./Pages/SigninPage/SignInPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import TaskPage from "./Pages/TaskPage/TaskPage";
import ExitPage from "./Pages/ExitPage/ExitPage"
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }
  function register(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }

    return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />} >
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route  path={appRoutes.EXIT} element={<ExitPage logout={logout}/>} />
          </Route>
      </Route>
      <Route  path={appRoutes.SIGNIN} element={<SignInPage login={login} />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage register={register}/>} />
      <Route path={appRoutes.NOT_FOUND_404} element={<NotFoundPage404 />} />
    </Routes>
  );
}