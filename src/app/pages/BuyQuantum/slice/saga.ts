import { all, put, takeLatest } from 'redux-saga/effects';
import Web3 from 'services/walletService/initWeb3';
import { actions } from '.';
import actionBuyAbi from 'services/walletService/config/actionBuy.abi.json';
import * as gasInfo from 'services/walletService/supportService/getGasInformation';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
// function* doSomething() {}

const spender = process.env.REACT_APP_NFT_SALES_ADDRESS;
const currency = process.env.REACT_APP_COIN_ADDRESS;
function* handleBuyNFT(action) {
  const { from, payableAmount, tokenSymbol } = action.payload;
  try {
    const instanceValue = yield Web3.getInstance;
    const web3: any = instanceValue.getWeb3();
    const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
    let value = payableAmount;
    if (tokenSymbol.toUpperCase() !== 'MATIC') value = 0;
    const txData = yield buyContract.methods.buyNFTMind(currency);
    const nonce = yield web3.eth.getTransactionCount(from, 'pending');
    const tx = {
      from,
      to: spender,
      value: value,
      nonce,
      data: txData.encodeABI(),
    };
    const gasData = yield gasInfo.getGasInformation(tx);
    const txBuy = {
      tx,
      gasPrice: gasData.gasPrice,
      gasLimit: gasData.gasLimit,
    };
    const receipt = yield signAndSendTx(txBuy);
    yield put(actions.buyNFTSuccess(receipt.status));
  } catch (err) {
    yield put(actions.buyNFTError());
  }
}
function* watchHandleBuyNFT() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.buyNFTSuccess, handleBuyNFT);
}
export function* buyNFTSaga() {
  yield all([watchHandleBuyNFT()]);
}
