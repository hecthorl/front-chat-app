import getTime from "utils/getTime";

const CurrentDate = () => {
   const { minuteSecondAndHour, yearDayAndMonth } = getTime(
      new Date().getTime()
   );

   return (
      <div>
         <span>{minuteSecondAndHour}</span>
         <span> • </span>
         <span>{yearDayAndMonth}</span>
      </div>
   );
};

export default CurrentDate;
