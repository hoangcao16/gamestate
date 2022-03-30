import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { buyNFTSaga } from './saga';
import { BuyNftState } from './types';

export const initialState: BuyNftState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const buyNFTSlice = createSlice({
  name: 'buyNFT',
  initialState,
  reducers: {
    buyNFTRequest(state, action) {
      state.isLoading = true;
    },
    buyNFTError(state) {
      state.isError = true;
    },
    buyNFTSuccess(state) {
      state.isSuccess = true;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
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
