import { useRef, useEffect } from 'react'

/**
 * @param {void} callback
 * @param {number} delay
 */
export default function useInterval(callback, delay) {
   const savedCallback = useRef()

   useEffect(() => {
      savedCallback.current = callback
   })

   useEffect(() => {
      function tick() {
         savedCallback.current()
      }

      const id = setInterval(tick, delay)
      return () => clearInterval(id)
   }, [delay])
}
