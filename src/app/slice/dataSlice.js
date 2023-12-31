import { createSlice } from '@reduxjs/toolkit';
import { data } from "../../data";
const initialState = {
  value: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state) => {
      state.value = data
    },
  },
})

export const { getData } = dataSlice.actions

export default dataSlice.reducer