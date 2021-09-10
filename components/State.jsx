import useStore from "../store";

const State = () => {
   const bears = useStore(state => state.bears);
   const increase = useStore(state => state.increasePopulation);
   const reset = useStore(state => state.removeAllBears);
   return (
      <div className="w-full max-w-[500px] mx-auto">
         <h1>{bears}</h1>
         <button
            onClick={increase}
            className="bg-pink-600 text-white p-1 rounded mt-4"
         >
            mas 1
         </button>
         <button
            onClick={reset}
            className="bg-pink-600 text-white p-1 rounded mt-4"
         >
            Reset
         </button>
      </div>
   );
};

export default State;
