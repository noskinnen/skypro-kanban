import styled from "styled-components";

export const PopNewCard = styled.div`
 display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  :target {
  display: block;
}
`;
export const PopNewCardContainer = styled.div`
width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopNewCardBlock = styled.div`
display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`;
export const PopNewCardContent = styled.div`
 display: block;
  text-align: left;
`;
export const PopNewCardTtl = styled.h3`
 color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;
export const PopNewCardClose = styled.a`
position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  :hover {
  color: #000000;
}
`;
export const PopNewCardWrap = styled.div`
 display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopNewCardForm = styled.form`
max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const FormNewBlock = styled.div`
 display: flex;
  flex-direction: column;
`;
export const Sbttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const FormNewInput = styled.input`
 margin: 20px 0;
width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  ::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`;
export const FormNewArea = styled.textarea`
max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  ::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`;
export const FormNewCreatButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
  :hover {
  background-color: #33399b;
}
`;
export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  .subttl {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
`;
export const CalendarBlock = styled.div`
  display: block;
`;
export const CalendarNav = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;
export const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;
export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavActionSvg = styled.svg`
  fill: #94A6BE;
`;
export const CalendarContent = styled.div`
 margin-bottom: 12px;
`;
export const CalendarDaysNames = styled.div`
 display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;
export const CalendarDayName = styled.div`
 color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;
export const CalendarCells = styled.div`
width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;
export const CalendarCell = styled.div`
width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;
export const CalendarCellOtherMonth = styled.div`
width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  ._other-month {
  opacity: 0;
}
`;
export const CalendarCellDay = styled.div`
width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  :hover {
  color: #94A6BE;
  background-color: #EAEEF6;
}
`;
export const CalendarCellDayCurrent = styled.div`
width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  :hover {
  color: #94A6BE;
  background-color: #EAEEF6;
}
._current {
  font-weight: 700;
}
`;