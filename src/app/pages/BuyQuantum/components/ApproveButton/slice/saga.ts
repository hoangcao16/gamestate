// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { all, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import { checkApprove } from 'services/walletService/approveService/approve';
import BigNumber from 'bignumber.js';
import { createApprove } from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';

const spender = process.env.REACT_APP_NFT_SALES_ADDRESS;
function* checkApproveNFT(action) {
  const instanceValue = Web3.getInstance;
  const { curAddress, tokenSymbol, amount } = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      yield instanceValue.setWeb3();
      const res = yield checkApprove(curAddress, tokenSymbol, spender, amount);
      const resDiv18 = Number(new BigNumber(res).dividedBy(10 ** 18).toFixed());
      if (resDiv18 >= Number(amount)) {
        yield put(actions.checkApproveNFTSuccess());
      } else {
        yield put(actions.checkApproveNFTError());
      }
      yield put(actions.checkApproveNFTAllowance(resDiv18));
    }
  } catch (err) {}
}
function* handleApproveNFT(action) {
  const { curAddress, tokenSymbol, amount } = action.payload;
  try {
    const tx = yield createApprove(curAddress, tokenSymbol, spender, amount);
    const receipt = yield signAndSendTx(tx);
    yield put(actions.handleApproveNFTRequest(receipt));
    yield put(actions.checkApproveNFTSuccess());
  } catch (error) {
  } finally {
    yield put(actions.clearLoading());
  }
}
function* watchCheckApproveNFT() {
  yield takeLatest(actions.checkApproveNFTRequest, checkApproveNFT);
}
function* watchHandleApproveNFT() {
  yield takeEvery(actions.handleApproveNFTRequest, handleApproveNFT);
}
export function* approveNFTSaga() {
  yield all([watchCheckApproveNFT(), watchHandleApproveNFT()]);
}
