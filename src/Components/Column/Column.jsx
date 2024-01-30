import Cards from "../Cards/Cards";

function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Cards topic={"Web design"} title={"Новая задача"} />
        <Cards topic={"Research"} title={"Новая задача"} />
        <Cards topic={"Copywriting"} title={"Новая задача"} />
        <Cards topic={"Research"} title={"Новая задача"} />
        <Cards topic={"Copywriting"} title={"Новая задача"} />
      </div>
    </div>
  );
}

export default Column;
