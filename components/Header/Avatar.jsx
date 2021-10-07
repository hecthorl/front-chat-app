import useUserAuth from 'hooks/useUserAuth'
import useStore from 'store'

const Avatar = () => {
   const { userData } = useUserAuth()
   const img = userData.user.image
   const openProfile = useStore(state => state.openProfile)
   const closeProfile = useStore(state => state.closeProfile)

   if (typeof window !== 'undefined') {
      document.addEventListener('click', closeProfile)
   }

   return (
      <button
         onClick={e => {
            e.stopPropagation()
            openProfile()
         }}
      >
         <img
            className="w-8 h-8 rounded-full overflow-hidden"
            src={img}
            alt="user image profile"
         />
      </button>
   )
}

export default Avatar
