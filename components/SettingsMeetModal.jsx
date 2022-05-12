import { Modal } from '@mantine/core'
import { useRouter } from 'next/router'
import NewRoom from './NewRoom'

export default function SettingsMeetModal() {
   const { query, push } = useRouter()
   const isOpen = JSON.parse(query.SettingsMeetModal ?? 'false')

   return (
      <Modal
         radius="lg"
         opened={isOpen}
         onClose={() => push('/', null, { shallow: false })}
         centered
         withCloseButton={false}
         overlayOpacity={0.85}
      >
         <NewRoom />
      </Modal>
   )
}
