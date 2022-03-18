import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { detailQASaga } from './saga';
import { DetailQAState } from './types';

export const initialState: DetailQAState = {
  data: {},
  isLoading: false,
};

const slice = createSlice({
  name: 'detailQA',
  initialState,
  reducers: {
    detailQARequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    detailQASuccess(state, action) {
      state.data = action.payload;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { actions } = slice;

export const useOrderNFTSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: detailQASaga });
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
