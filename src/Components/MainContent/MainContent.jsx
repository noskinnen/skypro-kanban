import {Container} from "../../styled/common/common.styled";
import * as S from "./MainContent.styled";

function MainContent({children}) {
  
    return (<S.Main>
    <Container>
      <S.MainBlock>
        <S.MainContent>
            {children}
        </S.MainContent>
      </S.MainBlock>
    </Container>
  </S.Main>

    )
}
export default MainContent;
