import { useState } from 'react'

/**
 *
 * @param {string} keyName
 * @param {object} defaultValue
 * @returns {[object, VoidFunction]}
 */
export default function useSessionStorage(keyName, defaultValue) {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const value = window.sessionStorage.getItem(keyName)

         if (value) return JSON.parse(value)
         window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue))
         return defaultValue
      } catch {
         return defaultValue
      }
   })

   const setValue = newValue => {
      window.sessionStorage.setItem(keyName, JSON.stringify(newValue))
      setStoredValue(newValue)
   }

   return [storedValue, setValue]
}
