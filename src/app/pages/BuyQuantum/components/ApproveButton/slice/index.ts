import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { approveNFTSaga } from './saga';
import { ApproveNFTState } from './types';
import BigNumber from 'bignumber.js';

export const initialState: ApproveNFTState = {
  isLoading: false,
  isAllow: false,
  receipt: undefined,
  allowance: undefined,
  isPublicSell: false,
  isSuccessBc: false,
  salePriceBc: 200,
  discountPercentageBc: '',
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
    getDiscount(state, action) {
      const getWhitelistPrice = action.payload;
      state.isSuccessBc = getWhitelistPrice[0];
      state.salePriceBc = Number(
        new BigNumber(getWhitelistPrice[1]).dividedBy(10 ** 18).toFixed(),
      );
      state.discountPercentageBc = getWhitelistPrice[2];
    },
    checkApproveNFTAllowance(state, action) {
      state.allowance = action.payload;
    },
    checkPublicSell(state, action) {
      state.isPublicSell = action.payload;
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
