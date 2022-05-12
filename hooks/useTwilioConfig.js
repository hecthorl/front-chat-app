import { useState } from 'react'
import { TWILIO_TOKEN_URL, INITIAL_STATE } from 'helpers/constants'

export default function useTwilioConfig() {
   const [config, setConfig] = useState(INITIAL_STATE)

   const getToken = async ({ identity, roomName }) => {
      setConfig({ ...INITIAL_STATE, isLoading: true })
      const resToken = await fetch(TWILIO_TOKEN_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            identity,
            room: roomName
         })
      }).catch(error => {
         console.log(`Error: ${error.message}`)
         setConfig(prev => ({ ...prev, isLoading: false, error }))
      })
      const { token } = await resToken.json()
      setConfig({
         isLoading: false,
         token,
         identity,
         roomName
      })
   }
   return { ...config, getToken }
}
