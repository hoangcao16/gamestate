import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const buyNFTSlice = (state: RootState) => state?.buyNFT || initialState;

export const buyNFTSelector = createSelector([buyNFTSlice], state => state);
