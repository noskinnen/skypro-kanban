import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);
  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Research",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopBrowse />
        <PopNewCard />

        <Header addCard={addCard} />
        {isLoading ? "ЗАГРУЗКА...": (        <MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              date={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
        </MainContent>)}

      </div>
    </>
  );
}

export default App;
