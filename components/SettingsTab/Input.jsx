import useStore from "store";

const Input = () => {
   const input = useStore(state => state.input);
   const setInput = useStore(state => state.setInput);
   return (
      <div className="relative">
         <input
            type="text"
            value={input}
            onChange={setInput}
            id="a"
            className="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-transparent"
            placeholder="asdsadasda"
         />
         <label
            htmlFor="a"
            className="text-gray-600 pointer-events-none text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-[top] duration-300 absolute left-0 -top-3"
         >
            Nombre de la Sala
         </label>
      </div>
   );
};

export default Input;
