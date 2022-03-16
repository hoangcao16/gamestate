import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const orderNFTSlice = (state: RootState) => state?.wearableNFT || initialState;

export const wearableNFTSelector = createSelector(
  [orderNFTSlice],
  state => state,
);
