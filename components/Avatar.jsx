import useUserAuth from "../hooks/useUserAuth";
import useStore from "../store";

const Avatar = () => {
   const { userData } = useUserAuth();
   const img = userData.user.image;
   const openProfile = useStore(state => state.openProfile);
   const closeProfile = useStore(state => state.closeProfile);

   document.addEventListener("click", closeProfile);

   return (
      <button
         onClick={e => {
            e.stopPropagation();
            openProfile();
         }}
      >
         <img className="w-8 rounded-full" src={img} alt="user image profile" />
      </button>
   );
};

export default Avatar;
