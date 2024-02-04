import { useState } from "react";
import "./App.css";
import Column from "./Components/Column/Column";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import PopBrowse from "./Components/popups/PopBrowse/PopBrowse";
import PopExit from "./Components/popups/PopExit/PopExit";
import PopNewCard from "./Components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
  const [cards, setCards] = useState(cardList);
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopBrowse />
        <PopNewCard />

        <Header />
        <MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              date={status}
              key={status}
              cardList={cardList.filter((card) => card.status === status)}
            />
          ))}
        </MainContent>
      </div>
    </>
  );
}

export default App;
