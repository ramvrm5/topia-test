
import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    dataArray: [],
    currentView: 'contentView',
    editValue: {},
    editIndex: null,
  },
   reducers: {
    dataArray:(state,action) => {
      state.dataArray = action.payload;
    },
    currentView:(state,action) => {
      state.currentView = action.payload;
    },
    editValue:(state,action) => {
      state.editValue = action.payload;
    },
    editIndex:(state,action) => {
      state.editIndex = action.payload;
    },
  },
});

export const { dataArray, currentView, editValue, editIndex } = globalSlice.actions;

export const selectDataArray = (state) => state.global.dataArray;
export const selectCurrentView = (state) => state.global.currentView;
export const selectEditValue = (state) => state.global.editValue;
export const selectEditIndex = (state) => state.global.editIndex;

export default globalSlice.reducer;
