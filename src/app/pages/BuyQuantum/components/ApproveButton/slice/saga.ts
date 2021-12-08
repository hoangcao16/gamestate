// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { all, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import BigNumber from 'bignumber.js';
import { createApprove } from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import erc20Abi from 'services/walletService/config/erc20.abi.json';
import * as gasInfo from 'services/walletService/supportService/getGasInformation';

const spender = process.env.REACT_APP_NFT_SALES_ADDRESS;
const coinAddress = process.env.REACT_APP_COIN_ADDRESS;
function* checkApproveNFT(action) {
  const instanceValue = Web3.getInstance;
  const { curAddress, tokenSymbol, amount } = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      yield instanceValue.setWeb3();
      let res;
      if (tokenSymbol === 'MATIC') res = amount;
      else {
        const web3: any = instanceValue.getWeb3();
        const tokenContract = new web3.eth.Contract(erc20Abi, coinAddress);
        res = yield tokenContract.methods.allowance(curAddress, spender).call();
      }
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
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const tokenContract = new web3.eth.Contract(erc20Abi, coinAddress);
  try {
    const tx = yield createApprove(curAddress, tokenSymbol, spender, amount);
    // const txData = yield tokenContract.methods.approve(
    //   spender,
    //   new BigNumber(amount).multipliedBy(10 ** 18).toFixed(),
    // );
    // const nonce = yield web3.eth.getTransactionCount(curAddress, 'pending');
    // const tx = {
    //   curAddress,
    //   to: coinAddress, // sua address coin
    //   value: 0,
    //   nonce,
    //   data: txData.encodeABI(),
    // };
    // console.log('txData', curAddress);
    // const gasData = yield gasInfo.getGasInformation(tx);
    // const receipt = yield signAndSendTx({
    //   tx,
    //   gasPrice: gasData.gasPrice,
    //   gasLimit: gasData.gasLimit,
    // });
    const receipt = yield signAndSendTx(tx);
    console.log('receipt', tx);
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
