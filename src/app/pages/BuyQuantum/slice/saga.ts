import { all, put, takeLatest } from 'redux-saga/effects';
import Web3 from 'services/walletService/initWeb3';
import { actions } from '.';
import actionBuyAbi from 'services/walletService/config/actionBuy.abi.json';
import * as gasInfo from 'services/walletService/supportService/getGasInformation';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { history } from 'app';

const spender = process.env.REACT_APP_NFT_SALES_ADDRESS;
const currency = process.env.REACT_APP_COIN_ADDRESS;
function* handleBuyNFT(action) {
  const { from, payableAmount, tokenSymbol } = action.payload;
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
  let value = payableAmount;
  if (tokenSymbol.toUpperCase() !== 'MATIC') value = 0;
  try {
    const txData = yield buyContract.methods.buyNFTMint(currency);
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
    yield signAndSendTx(txBuy);
    // yield put(actions.buyNFTSuccess(receipt.status));
    history.push('/order');
  } catch (err) {
    yield put(actions.buyNFTError());
  } finally {
    yield put(actions.clearLoading());
  }
}
function* watchHandleBuyNFT() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.buyNFTRequest, handleBuyNFT);
}
export function* buyNFTSaga() {
  yield all([watchHandleBuyNFT()]);
}
