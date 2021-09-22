import useUserAuth from "hooks/useUserAuth";
import getTime from "utils/getTime";

const ChatTimleline = ({ messages }) => {
   const { userData } = useUserAuth();

   return messages.map(({ date, msg }, id) => {
      const { minuteSecondAndHour, yearDayAndMonth } = getTime(date);
      return (
         <div className="w-full flex gap-x-3 px-2 md:pl-2 mt-2" key={id}>
            <img
               src={userData.user.image}
               alt="sadasd"
               className="rounded-full w-11 h-11"
            />
            <div className="w-full">
               <div className="flex md:items-center md:justify-start justify-between gap-x-3">
                  <div className="font-semibold flex-shrink-0">
                     {userData.user.name}
                  </div>
                  <small className="text-gray-400 flex flex-col md:flex-row">
                     <span>{yearDayAndMonth}</span>
                     <span className="hidden md:mx-2 md:block">·</span>
                     <span>{minuteSecondAndHour}</span>
                  </small>
               </div>
               <p className="on-break">{msg}</p>
            </div>
         </div>
      );
   });
};

export default ChatTimleline;
