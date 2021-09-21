import useUserAuth from "hooks/useUserAuth";
import getTime from "utils/getTime";

const ChatTimleline = ({ messages }) => {
   const { userData } = useUserAuth();

   return messages.map(({ date, msg }, id) => {
      const { minuteSecondAndHour, yearDayAndMonth } = getTime(date);
      return (
         <div className="w-full flex gap-x-3 pl-2 mt-2" key={id}>
            <img
               src={userData.user.image}
               alt="sadasd"
               className="rounded-full w-11 h-11"
            />
            <div>
               <div className="flex items-center gap-x-3">
                  <p className="font-semibold">{userData.user.name}</p>
                  <small className="text-gray-400">
                     {yearDayAndMonth}
                     <span className="mx-2">·</span>
                     {minuteSecondAndHour}
                  </small>
               </div>
               <p className="on-break">{msg}</p>
            </div>
         </div>
      );
   });
};

export default ChatTimleline;
