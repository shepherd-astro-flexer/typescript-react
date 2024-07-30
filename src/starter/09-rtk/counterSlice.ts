import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "inactive" | "pending...";

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterState = {
  count: 0,
  status: "pending...",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    // if we are using the action(i.e passing in a payload), we need to pass in the PayloadAction
    // PayloadAction is a generic and will be looking for a type, this are the values that typescript is going to be checking when you pass in a payload
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;
// slice is exported by default since we would want to name it differently once we get to store
export default counterSlice.reducer;
