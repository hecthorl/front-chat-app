import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

const useStore = create(set => ({
   messages: [],
   setMessages: data => set(state => ({ messages: [...state.messages, data] })),
   input: "",
   setInput: event => set(() => ({ input: event.target.value })),
   resetInput: () => set({ input: "" }),
}));

if (typeof window !== "undefined") {
   if (process.env.NODE_ENV === "development") {
      mountStoreDevtool("Store", useStore);
   }
}

export default useStore;
