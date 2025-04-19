import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk('cart/getItems', async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Request Error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  items: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    remove: (state, { payload: { id } }) => {
      state.items = state.items.filter((item) => item.id !== id);
    },
    increase: (state, { payload: { id } }) => {
      const filteredItem = state.items.find((item) => item.id === id);
      filteredItem.amount++;
    },
    decrease: (state, { payload: { id } }) => {
      const filteredItem = state.items.find((item) => item.id === id);
      filteredItem.amount--;

      if (filteredItem.amount === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    update: (state) => {
      state.total = state.items.reduce((acc, { amount, price }) => {
        const total = acc + amount * price;
        return new Number(total.toFixed(2)).valueOf();
      }, 0);
      state.amount = state.items.reduce((acc, { amount }) => acc + amount, 0);
    },
    extraReducers: (builder) => {
      builder
        .addCase(getItems.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getItems.fulfilled, (state, { payload }) => {
          console.log(payload);
          state.isLoading = false;
          state.items = payload;
        })
        .addCase(getItems.rejected, (state) => {
          state.isLoading = false;
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clear, remove, increase, decrease, update } = cartSlice.actions;

export default cartSlice.reducer;
