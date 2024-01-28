import "./App.css";
import Column from "./Components/Column/Column";
import Header from "./Components/Header/Header";
import PopBrowse from "./Components/popups/PopBrowse/PopBrowse";
import PopExit from "./Components/popups/PopExit/PopExit";
import PopNewCard from "./Components/popups/PopNewCard/PopNewCard";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}

<PopExit/>
<PopBrowse/>
<PopNewCard/>

        {/* pop-up end*/}
<Header/>
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
<Column title={"Без статуса"}/>
<Column title={"Нужно сделать"}/>
<Column title={"В работе"}/>
<Column title={"Тестирование"}/>
<Column title={"Готово"}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
