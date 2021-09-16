import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

const useStore = create(set => ({
   messages: [],
   setMessages: data => set(state => ({ messages: [...state.messages, data] })),
   isPopup: false,
   openPopup: () => set({ isPopup: true }),
   closePopup: () => set({ isPopup: false }),
   isProfileOpen: false,
   closeProfile: () => set({ isProfileOpen: false }),
   openProfile: () => set({ isProfileOpen: true }),
}));

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
   mountStoreDevtool("Store", useStore);
}

export default useStore;
