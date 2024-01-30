import "./App.css";
import Column from "./Components/Column/Column";

import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import PopBrowse from "./Components/popups/PopBrowse/PopBrowse";
import PopExit from "./Components/popups/PopExit/PopExit";
import PopNewCard from "./Components/popups/PopNewCard/PopNewCard";

function App() {
  return (
    <>
      <div className="wrapper">

        <PopExit />
        <PopBrowse />
        <PopNewCard />

        <Header />
        <MainContent>
          <Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Тестирование"} />
          <Column title={"Готово"} />
        </MainContent>
      </div>
    </>
  );
}

export default App;
