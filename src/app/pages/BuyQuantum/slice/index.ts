import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { buyNFTSaga } from './saga';
import { BuyNftState } from './types';

export const initialState: BuyNftState = {
  status: false,
};

const buyNFTSlice = createSlice({
  name: 'buyNFT',
  initialState,
  reducers: {
    buyNFTRequest(state, action) {},
    buyNFTSuccess(state, action: PayloadAction<any>) {
      state.status = action.payload;
    },
    buyNFTError(state) {},
  },
});

export const { actions } = buyNFTSlice;

export const useBuyNFTSlice = () => {
  useInjectReducer({ key: buyNFTSlice.name, reducer: buyNFTSlice.reducer });
  useInjectSaga({ key: buyNFTSlice.name, saga: buyNFTSaga });
  return { actions: buyNFTSlice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
