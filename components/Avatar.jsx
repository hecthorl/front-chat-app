import useUserAuth from "../hooks/useUserAuth";

const Avatar = () => {
   const { userData } = useUserAuth();
   const img = userData.user.image;
   return (
      <button>
         <img className="w-8 rounded-full" src={img} alt="user image profile" />
      </button>
   );
};

export default Avatar;
