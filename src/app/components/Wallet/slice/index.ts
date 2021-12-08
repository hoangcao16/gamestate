import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { WalletState } from './types';

export const initialState: WalletState = {
  wallet: null,
};

const slice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    storeWallet(state, action: PayloadAction<Object>) {
      state.wallet = action.payload;
    },
    emptyWallet(state) {
      state.wallet = null;
    },
  },
});

export const { actions } = slice;

export const useWalletSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useWalletSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
