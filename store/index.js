import { mountStoreDevtool } from "simple-zustand-devtools";
import { io } from "socket.io-client";
import create from "zustand";
const url = process.env.NEXT_PUBLIC_URL_BACKEND;
// const url = "http://localhost:4000";

const useStore = create(set => ({
   messages: [],
   setMessages: data => set(state => ({ messages: [...state.messages, data] })),
   isPopup: false,
   isProfileOpen: false,
   isSettingsOpen: false,
   toggleInput: false,
   input: "",
   socket: io(url),
   openPopup: () => set({ isPopup: true }),
   closePopup: () => set({ isPopup: false }),
   closeProfile: () => set({ isProfileOpen: false }),
   openProfile: () => set({ isProfileOpen: true }),
   openSettings: () => set({ isSettingsOpen: true }),
   closeSettings: () => set({ isSettingsOpen: false }),
   setToggleInput: () => set(state => ({ toggleInput: !state.toggleInput })),
   setInput: event => set({ input: event.target.value }),
   roomData: {},
   setRoomData: roomInfo => set(() => ({ roomData: roomInfo })),
}));

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
   mountStoreDevtool("Store", useStore);
}

export default useStore;
