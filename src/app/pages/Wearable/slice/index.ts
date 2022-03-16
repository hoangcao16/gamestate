import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { OrderNFTSaga } from './saga';
import { WearableNFTState } from './types';

export const initialState: WearableNFTState = {
  data: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'wearableNFT',
  initialState,
  reducers: {
    wearableNFTRequest(state, action: PayloadAction<any>) {
      state.isLoading = true;
    },
    wearableNFTSuccess(state, action) {
      state.data = action.payload;
    },
    clearLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { actions } = slice;

export const useWearableNFTSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderNFTSaga });
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
