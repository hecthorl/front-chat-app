import useStore from 'store'

const Toggle = () => {
   const toggleInput = useStore(state => state.toggleInput)
   const setToggleInput = useStore(state => state.setToggleInput)
   return <div></div>
}

export default Toggle
