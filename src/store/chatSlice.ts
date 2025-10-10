import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  isOpen: boolean;
  isHidden: boolean;
}

const initialState: ChatState = {
  isOpen: false,
  isHidden: true,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleChat: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeChat: (state) => {
      state.isOpen = false;
    },
    openChat: (state) => {
      state.isOpen = true;
    },
    hiddenChat: (state) => {
      state.isHidden = true;
    },
    showChat: (state) => {
      state.isHidden = false;
      state.isOpen = true;
    },
    toggleShowChat: (state) => {
      state.isOpen = !state.isOpen;
      state.isHidden = !state.isHidden;
    },
  },
});

export const {
  toggleChat,
  closeChat,
  openChat,
  hiddenChat,
  showChat,
  toggleShowChat,
} = chatSlice.actions;

export default chatSlice.reducer;
