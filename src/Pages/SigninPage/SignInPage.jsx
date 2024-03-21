import "../../App.css";
import { appRoutes } from "../../lib/approutes";
import { Link, useNavigate } from "react-router-dom";
import { WrapperRegisterSignin } from "../../styled/common/common.styled";
import { useState } from "react";
import { signIn } from "../../api";
import * as S from "./SigninPage.styled";
import { useUser } from "../../hooks/useUser";

export default function SigninPage() {
  const {login} = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setLoginData({
      ...loginData, 
      [name]: value, 
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
      navigate(appRoutes.MAIN);
    });
  };

  return (
    <WrapperRegisterSignin>
      <S.ContainerSignIn>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>Вход</S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                value={loginData.login}
                onChange={handleInputChange}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                value={loginData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></S.ModalInput>

              <S.ModalBtnEnter 
                id="btnEnter"
                onClick={handleLogin}>
              Войти  
              </S.ModalBtnEnter>

              <S.ModalFormGroup>
            Нужно зарегистрироваться?
                <Link to={appRoutes.REGISTER}><S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA></Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignIn>
    </WrapperRegisterSignin>
  );
}