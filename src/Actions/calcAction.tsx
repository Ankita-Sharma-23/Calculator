import { CLEAR, EQUAL, ADD_NUMBERS } from "../Constants/actionTypes";

export const addElem = (data:any) => ({
  type: ADD_NUMBERS,
  payload: data
})

export const clear = () => ({
  type: CLEAR,
})

export const equal = (data:any) => ({
  type: EQUAL,
  payload: data
})
