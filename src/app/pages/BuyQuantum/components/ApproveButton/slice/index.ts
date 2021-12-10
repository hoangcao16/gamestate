import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { approveNFTSaga } from './saga';
import { ApproveNFTState } from './types';

export const initialState: ApproveNFTState = {
  isLoading: false,
  isAllow: false,
  receipt: undefined,
  allowance: undefined,
};

const slice = createSlice({
  name: 'approveNFT',
  initialState,
  reducers: {
    checkApproveNFTRequest(state, action: PayloadAction<any>) {},
    checkApproveNFTSuccess(state) {
      state.isAllow = true;
    },
    checkApproveNFTError(state) {
      state.isAllow = false;
    },
    checkApproveNFTAllowance(state, action) {
      state.allowance = action.payload;
    },
    handleApproveNFTRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
      state.receipt = action.payload;
    },
    clearReceipt(state) {
      state.receipt = undefined;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { actions } = slice;

export const useApproveNFT = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: approveNFTSaga });
  return { actions: slice.actions };
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
