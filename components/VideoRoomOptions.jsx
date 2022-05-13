import { ActionIcon, Box, Button } from '@mantine/core'
import {
   BsCameraVideoOff,
   BsCameraVideo,
   BsThreeDotsVertical,
   BsShieldLockFill,
   BsShieldLock,
   BsPeopleFill,
   BsPeople,
   BsChatLeftTextFill,
   BsChatLeftText,
   BsGrid1X2Fill,
   BsGrid1X2
} from 'react-icons/bs'
import { ImPhoneHangUp } from 'react-icons/im'
import { BiMicrophoneOff, BiMicrophone } from 'react-icons/bi'
import { MdOutlineScreenShare } from 'react-icons/md'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Hour = dynamic(() => import('./Hour'), { ssr: false })

export default function VideoRoomOptions({
   toggleCamera,
   toggleMicrophone,
   isCameraOn,
   isMicrophoneOn
}) {
   const { query, push } = useRouter()
   return (
      <Box m={18} sx={{ display: 'flex', justifyContent: 'space-between' }}>
         <Box
            sx={{
               color: 'white',
               display: 'flex',
               justifyContent: 'start',
               alignItems: 'center',
               whiteSpace: 'nowrap',
               textOverflow: 'ellipsis',
               overflow: 'hidden',
               flex: 1
            }}
         >
            <Hour color="white" />
            <Box mx={5} children="|" />
            <Box children={query.roomId ?? 'xd'} />
         </Box>
         <Box
            sx={{
               display: 'flex',
               gap: '1rem',
               alignItems: 'center',
               justifyContent: 'center',
               flex: 1
            }}
         >
            <ActionIcon
               onClick={() => toggleMicrophone()}
               size="xl"
               variant="filled"
               radius="xl"
               color={isMicrophoneOn ? 'gray' : 'red'}
            >
               {isMicrophoneOn ? <BiMicrophone /> : <BiMicrophoneOff />}
            </ActionIcon>
            <ActionIcon
               onClick={() => toggleCamera()}
               size="xl"
               variant="filled"
               radius="xl"
               color={isCameraOn ? 'gray' : 'red'}
            >
               {isCameraOn ? <BsCameraVideo /> : <BsCameraVideoOff />}
            </ActionIcon>
            <ActionIcon size="xl" variant="filled" radius="xl">
               <MdOutlineScreenShare />
            </ActionIcon>
            <ActionIcon size="xl" variant="filled" radius="xl">
               <BsThreeDotsVertical />
            </ActionIcon>
            <Button
               onClick={() => push('/')}
               color="red"
               sx={{ fontSize: '1.5rem' }}
               radius="lg"
            >
               <ImPhoneHangUp />
            </Button>
         </Box>
         <Box
            sx={{
               flex: 1,
               display: 'flex',
               gap: '1rem',
               alignItems: 'center',
               justifyContent: 'flex-end',
               '@media (max-width: 690px)': {
                  display: 'none'
               }
            }}
         >
            <ActionIcon
               sx={{
                  '&:hover': { backgroundColor: '#868e9633' },
                  color: 'white'
               }}
               size="xl"
               radius="xl"
            >
               {query?.algo ? <BsShieldLockFill /> : <BsShieldLock />}
            </ActionIcon>
            <ActionIcon
               sx={{
                  ':hover': { backgroundColor: '#868e9633' },
                  color: 'white'
               }}
               size="xl"
               radius="xl"
            >
               {query?.algo ? <BsPeopleFill /> : <BsPeople />}
            </ActionIcon>
            <ActionIcon
               sx={{
                  ':hover': { backgroundColor: '#868e9633' },
                  color: 'white'
               }}
               size="xl"
               radius="xl"
            >
               {query?.algo ? <BsChatLeftTextFill /> : <BsChatLeftText />}
            </ActionIcon>
            <ActionIcon
               sx={{
                  ':hover': { backgroundColor: '#868e9633' },
                  color: 'white'
               }}
               size="xl"
               radius="xl"
            >
               {query?.algo ? <BsGrid1X2Fill /> : <BsGrid1X2 />}
            </ActionIcon>
            <ActionIcon
               sx={{
                  ':hover': { backgroundColor: '#868e9633' },
                  color: 'white'
               }}
               size="xl"
               radius="xl"
            >
               {query?.algo ? <BsShieldLockFill /> : <BsShieldLock />}
            </ActionIcon>
         </Box>
      </Box>
   )
}
