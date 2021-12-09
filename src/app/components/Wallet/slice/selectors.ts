import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.globalState || initialState;

export const selectWallet = createSelector([selectSlice], state => state);
