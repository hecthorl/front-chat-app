/**
 * Genera un identificador único similiar al de google meet para crear una room
 * @returns {string}
 */
export default function randomUID() {
   const alpha = Array.from(Array(26)).map((_, i) => 65 + i)
   const alphabet = alpha.map(x => String.fromCharCode(x).toLowerCase())

   const leettersShuffled = shuffle(alphabet).slice(0, 12)

   leettersShuffled[3] = '-'
   leettersShuffled[8] = '-'

   return leettersShuffled.join('')
}

/**
 * @param {string[] | number[]} array Array para mutar
 * @returns {string[] | number[]} Array mutado
 */
function shuffle(array) {
   let currentIndex = array.length

   while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex]
      ]
   }

   return array
}
