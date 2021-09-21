import useUserAuth from "hooks/useUserAuth";
import useStore from "store";
import SignoutBtn from "../buttons/SignoutBtn";

const ProfilePopup = () => {
   const {
      userData: {
         user: { email, image, name },
      },
   } = useUserAuth();
   const isProfileOpen = useStore(state => state.isProfileOpen);

   if (!isProfileOpen) return null;
   return (
      <div
         onClick={e => e.stopPropagation()}
         className="border z-10 border-gray-300 absolute flex flex-col gap-y-3 items-center justify-center w-[356px] h-[400px] right-0 bg-white rounded shadow-lg"
      >
         <img className="w-20 rounded-full" src={image} alt="user profile" />
         <p className="">{name}</p>
         <p>{email}</p>
         <div className="w-full h-[1px] bg-gray-300"></div>
         <SignoutBtn />
      </div>
   );
};

export default ProfilePopup;
