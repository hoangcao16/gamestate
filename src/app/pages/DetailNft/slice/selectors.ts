import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const orderNFTSlice = (state: RootState) => state?.detailNFT || initialState;

export const orderNFTSelector = createSelector([orderNFTSlice], state => state);
