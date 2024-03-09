import { useState } from "react";
import { Button, Container } from "../../styled/common/common.styled.js";
import * as S from "./Header.styled.js";
import {Link} from "react-router-dom";
import { appRoutes } from "../../lib/approutes.js";

function Header({ addCard }) {

  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }

  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
                <div className="header__logo _show _light">
                  <a href="" target="_self">
                    <img src="images/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="header__logo _dark">
                  <a href="" target="_self">
                    <img src="images/logo_dark.png" alt="logo" />
                  </a>
                </div>
                <S.HeaderNav>
                  <S.HeaderBtnMainNew
                    onClick={addCard}
                    id="btnMainNew"
                  >
                    Создать новую задачу
                  </S.HeaderBtnMainNew>
                  <S.HeaderUser onClick={togglePopup}>
                    Ivan Ivanov
                  </S.HeaderUser>
                  {isOpened && (
                    <S.HeaderPopUserSet>
                      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                      <S.PopUserSetMail>
                        ivan.ivanov@gmail.com
                      </S.PopUserSetMail>
                      <S.PopUserSetTheme>
                        <p>Темная тема</p>
                        <input
                          type="checkbox"
                          className="checkbox"
                          name="checkbox"
                        />
                      </S.PopUserSetTheme>
                      <Link to={appRoutes.EXIT}>
                      <S.ExitButton>
                        <Button>
                        Выйти
                        </Button>
                      </S.ExitButton>
                      </Link>
                    </S.HeaderPopUserSet>
                  )}
                </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;