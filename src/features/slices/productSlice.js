import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    amountProduct: 0,
    order: {
      _id: '',
      name: '',
      image: '',
      price: 0,
      amount: 0,
    },
  },
  reducers: {
    setAmountProduct: (state, action) => {
      state.amountProduct += action.payload
    },
    setOrderProduct: (state, action) => {
      state.order = action.payload
      console.log(state.order)
    },
  },
})

export const { setAmountProduct, setOrderProduct } = productSlice.actions

export default productSlice.reducers
