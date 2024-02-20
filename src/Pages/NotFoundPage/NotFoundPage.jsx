import { Link } from "react-router-dom";
import { GlobalStyle } from "../../styled/common/Global.Styled.js";
import  AppRoutes  from "../../lib/approutes.js";
import styled from "styled-components";

const Item = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export default function NotFoundPage() {
  return (
    <>
      <GlobalStyle />
      <Item>
        <h1>Ошибка 404. Страница не существует:</h1>
        <Link to={AppRoutes.MAIN}>Вернуться на главную</Link>
      </Item>
    </>
  );
}
