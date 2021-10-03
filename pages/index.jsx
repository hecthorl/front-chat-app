import LHead from 'components/LHead'
import dynamic from 'next/dynamic'

const Welcome = dynamic(() => import('components/Welcome'), { ssr: false })

export default function Home() {
   return (
      <>
         <LHead title="Goole-meet Clone" />
         <Welcome />
      </>
   )
}
