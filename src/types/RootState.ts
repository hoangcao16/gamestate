// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
import { GlobalState } from '../store/globalReducer';
import { WalletState } from 'app/components/Wallet/slice/types';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  globalState: GlobalState;
  wallet?: WalletState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
