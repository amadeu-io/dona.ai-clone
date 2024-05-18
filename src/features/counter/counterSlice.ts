import type { PayloadAction } from "@reduxjs/toolkit"
import type { AppThunk } from "../../app/store"
import { createSlice } from "@reduxjs/toolkit"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: create => ({
    increment: create.reducer(state => {
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    ),
  }),
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})

// Action creators are generated for each case reducer function.
export const { decrement, increment, incrementByAmount } = counterSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectCount, selectStatus } = counterSlice.selectors

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 1 || currentValue % 2 === -1) {
      dispatch(incrementByAmount(amount))
    }
  }
