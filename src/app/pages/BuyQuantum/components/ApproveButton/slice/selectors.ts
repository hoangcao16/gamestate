import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const approveNFTSlice = (state: RootState) => state?.approveNFT || initialState;

export const approveNFTSelector = createSelector(
  [approveNFTSlice],
  state => state,
);
