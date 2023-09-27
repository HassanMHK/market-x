import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const clearCartModalSlice = createSlice({
    name: 'clearCartModal',
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isOpen = false;
        },
        openModal: (state) => {
            state.isOpen = true;
        }
    }
});

export const { closeModal, openModal } = clearCartModalSlice.actions;
export default clearCartModalSlice.reducer;