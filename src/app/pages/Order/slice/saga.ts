// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { put, takeLatest, all } from '@redux-saga/core/effects';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import actionNftAbi from 'services/walletService/config/actionNft.abi.json';
import { apiGetListQA } from 'services/apiDetailNFt';

function* handleOrderNFT(action) {
  const spender = process.env.REACT_APP_QUANTUM_ACCELERATOR;
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
      const listAllQA = yield apiGetListQA();
      console.log(listAllQA.data, 'listAllQA');
      yield put(actions.orderNFTSuccess(txData));
      yield put(actions.listQASuccess(listAllQA.data));
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
