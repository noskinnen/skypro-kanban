import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import NotFoundPage404 from "./Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import TaskPage from "./Pages/TaskPage/TaskPage";
import ExitPage from "./Pages/ExitPage/ExitPage"
import { Routes, Route } from "react-router-dom";
import EditTaskPage from "./pages/EditTaskPage/EditTaskPage";
import WatchTaskPage from "./Pages/WatchTaskPage/WatchTaskPage";
import { appRoutes } from "./lib/approutes";
import SignInPage from "./pages/SigninPage/SignInPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute  />}>
        <Route path={appRoutes.MAIN} element={<MainPage />} >
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.WATCHTASK} element={<WatchTaskPage />} />
          <Route path={appRoutes.EDITTASK} element={<EditTaskPage />} />
          <Route  path={appRoutes.EXIT} element={<ExitPage />} />
          </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SignInPage />} />
      <Route path={appRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={appRoutes.NOT_FOUND_404} element={<NotFoundPage404 />} />
    </Routes>
  );
}