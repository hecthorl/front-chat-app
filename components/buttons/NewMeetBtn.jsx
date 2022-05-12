import { Button, Menu } from '@mantine/core'
import useUserAuth from 'hooks/useUserAuth'
import { useRouter } from 'next/router'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { BiVideoPlus } from 'react-icons/bi'

export default function NewRoomBtn() {
   const { signIn, userData } = useUserAuth()
   const { push } = useRouter()

   if (!userData.email) {
      return (
         <Button
            onClick={() => signIn('google')}
            sx={{ width: 'fit-content' }}
            leftIcon={<AiOutlineVideoCamera />}
            children="Nueva Room"
         />
      )
   }

   return (
      <Menu
         gutter={-30}
         control={
            <Button
               sx={{ width: 'fit-content' }}
               leftIcon={<AiOutlineVideoCamera />}
               children="Nueva Room"
            />
         }
      >
         <Menu.Item
            component="button"
            onClick={() =>
               push('/?SettingsMeetModal=true', '/', { shallow: true })
            }
            children="Iniciar videollamada"
            icon={<BiVideoPlus />}
         />
      </Menu>
   )
}
