import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../api";
import * as S from "./SignInPage.styled";
import { appRoutes } from "../../lib/approutes";
import { WrapperRegisterSignIn } from "../../styled/common/common.styled";

export default function SignInPage({ login }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData, 
      [name]: value, 
    });
  };

  return (
    <WrapperRegisterSignIn>
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
                <Link to={appRoutes.REGISTER}>
                  <S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA></Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignIn>
    </WrapperRegisterSignIn>
  );
}