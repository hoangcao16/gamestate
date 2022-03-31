import { all, put, takeLatest } from 'redux-saga/effects';
import actionBuyAbi from 'services/walletService/config/actionBuy.abi.json';
import Web3 from 'services/walletService/initWeb3';
import * as gasInfo from 'services/walletService/supportService/getGasInformation';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { actions } from '.';
// import { history } from 'app';

const spender = process.env.REACT_APP_BUY_NFT_ADDRESS;
const currency = process.env.REACT_APP_GS20_TOKEN_ADDRESS;
// function forwardTo(location) {
//   history.push(location);
// }
function* handleBuyNFT(action) {
  const { from, payableAmount, tokenSymbol, couponCode } = action.payload;
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
  console.log(buyContract, 'buyContract');
  let value = payableAmount;
  if (tokenSymbol.toUpperCase() !== 'MATIC') value = 0;
  try {
    const txData = yield buyContract.methods.buyNFT(currency, couponCode);
    console.log(txData, 'txData');
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
    console.log(receipt, 'receipt');
    yield put(actions.buyNFTSuccess());
    // yield call(forwardTo, '/success');
    // history.push('/utility');
  } catch (err) {
    console.log(err, 'err buy');
    // yield put(actions.buyNFTError());
    yield put(actions.buyNFTSuccess());
  } finally {
    yield put(actions.clearLoading());
  }
}
function* handleCheckBuyNFT(action) {
  const instanceValue = Web3.getInstance;
  const { curAddress } = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      yield instanceValue.setWeb3();
      const web3: any = instanceValue.getWeb3();
      // check public sell
      const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
      console.log(buyContract, 'buyContract');
      const isPublic = yield buyContract.methods._isPublicSale().call();
      const getDiscount = yield buyContract.methods
        .getWhitelistedSalePrice(curAddress, currency)
        .call();
      const isAlreadyBought = yield buyContract.methods
        .isAlreadyBought(curAddress)
        .call();
      console.log(isAlreadyBought, 'isAlreadyBought');

      yield put(actions.checkPublicSell(isPublic));
      yield put(actions.getDiscount(getDiscount));
      yield put(actions.checkIsAlreadyBought(isAlreadyBought));
    }
  } catch (error) {
    console.log(error);
  }
}
function* watchHandleBuyNFT() {
  yield takeLatest(actions.buyNFTRequest, handleBuyNFT);
}
function* watchHandleCheckBuyNFT() {
  yield takeLatest(actions.checkBuyNFTRequest, handleCheckBuyNFT);
}
export function* buyNFTSaga() {
  yield all([watchHandleBuyNFT(), watchHandleCheckBuyNFT()]);
}
