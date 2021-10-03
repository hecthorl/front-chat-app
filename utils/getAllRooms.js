// El auth de la página principal "/" la manejo desde el cliente
// Por tanto, no puedo (o no quiero) usar getServersideProps
// En vez, este método se llama un paso antes de abrir el popup
// y asi evitar loadings
const getAllRooms = async setAllRooms => {
   const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND
   const response = await fetch(`${BASE_URL}/allrooms`).catch(err => {
      throw Error(err)
   })
   const data = await response.json()
   setAllRooms(data)
}

export default getAllRooms
