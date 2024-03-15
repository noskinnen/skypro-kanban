import { format } from 'date-fns';
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarCustom, Calendars, CategoriesP, ChooseDate } from './Calendar.styled';


export default function Calendar({selectedDate, setSelectedDate}) {
 
  let footer = <ChooseDate>Выберите срок исполнения</ChooseDate>;
  if (selectedDate) {
    footer = <ChooseDate>Вы выбрали {format(selectedDate, "PP", { locale: ru })}</ChooseDate>;
  }
  return (
    <Calendars>
      <CategoriesP>Даты</CategoriesP>
    <CalendarCustom locale={ru}
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
    </Calendars>
  );
}