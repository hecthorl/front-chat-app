import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

const useStore = create(set => ({
   messages: [],
   setMessages: data => set(state => ({ messages: [...state.messages, data] })),
   isPopup: false,
   isProfileOpen: false,
   isSettingsOpen: false,
   toggleInput: false,
   openPopup: () => set({ isPopup: true }),
   closePopup: () => set({ isPopup: false }),
   closeProfile: () => set({ isProfileOpen: false }),
   openProfile: () => set({ isProfileOpen: true }),
   openSettings: () => set({ isSettingsOpen: true }),
   closeSettings: () => set({ isSettingsOpen: false }),
   setToggleInput: () => set(state => ({ toggleInput: !state.toggleInput })),
}));

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
   mountStoreDevtool("Store", useStore);
}

export default useStore;
