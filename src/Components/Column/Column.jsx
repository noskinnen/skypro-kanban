import Card from "../Cards/Cards";
import * as S from "./Column.styled";

function Column({title, cardList}) {
    return (
    <S.MainColumn>
    <S.ColumnTitle>
        <p>{title}</p>
    </S.ColumnTitle>
    <S.Cards>
        {cardList.map((card) => <Card theme={card.theme} cardTitle={card.title} date={card.date} key={card.id}/>)}
    </S.Cards>
</S.MainColumn>)
}
export default  Column;