import { configureStore, createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
    name: "memo",
    initialState: {
        memoList: [{ id: 0, title: '첫번째', memo: '첫번째 메모입니다'}],
        id: 1
    },
    reducers: {
        addMemo(state, action) {
            state.memoList = state.memoList.concat({ ...action.payload, id: state.id });
            state.id += 1;
        },
        deleteMemo(state, action) {
            const i = state.memoList.findIndex((el) => el.id === action.payload);
            state.memoList.splice(i, 1);
        }
    }
})

export const { addMemo, deleteMemo } = memoSlice.actions;

const store = configureStore({
    reducer: {
        memo: memoSlice.reducer
    }
});

export default store;