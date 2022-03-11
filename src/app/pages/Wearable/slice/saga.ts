// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { put, takeLatest, all } from '@redux-saga/core/effects';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import actionNftAbi from 'services/walletService/config/nftDetail.abi.json';

function* handleOrderNFT(action) {
  const spender = process.env.REACT_APP_NFT_DETAIL;
  const curAddress = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      const instanceValue = Web3.getInstance;
      yield instanceValue.setWeb3();
      const web3: any = instanceValue.getWeb3();
      const buyContract = new web3.eth.Contract(actionNftAbi, spender);
      const txData = yield buyContract.methods
        .getOwnedTokenIds(curAddress)
        .call();
      console.log(txData, 'txData');
      yield put(actions.orderNFTSuccess(txData));
    }
  } catch (err) {
  } finally {
    yield put(actions.clearLoading());
  }
}
function* watchHandleOrderNFT() {
  yield takeLatest(actions.orderNFTRequest, handleOrderNFT);
}

export function* OrderNFTSaga() {
  yield all([watchHandleOrderNFT()]);
}
