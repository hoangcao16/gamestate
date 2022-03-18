import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const detailQASlice = (state: RootState) => state?.detailQA || initialState;

export const detailQASelector = createSelector([detailQASlice], state => state);
