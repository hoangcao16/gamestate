import { all, put, takeLatest } from 'redux-saga/effects';
import actionBuyAbi from 'services/walletService/config/actionBuy.abi.json';
import Web3 from 'services/walletService/initWeb3';
import * as gasInfo from 'services/walletService/supportService/getGasInformation';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { actions } from '.';
// import { history } from 'app';

const spender = process.env.REACT_APP_BUY_NFT_ADDRESS_MAINNET;
const currency = process.env.REACT_APP_COIN_ADDRESS_MAINNET;
// function forwardTo(location) {
//   history.push(location);
// }
function* handleBuyNFT(action) {
  const { from, payableAmount, tokenSymbol, couponCode } = action.payload;
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
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
      gasPrice: 50000000000, // gasData.gasPrice,
      gasLimit: gasData.gasLimit,
    };
    const receipt = yield signAndSendTx(txBuy);
    console.log(receipt, 'receipt');
    yield put(actions.buyNFTSuccess());
    // yield call(forwardTo, '/success');
    // history.push('/utility');
  } catch (err: any) {
    console.log(err, 'err buy');
    // yield put(actions.buyNFTError());
    // yield put(actions.buyNFTSuccess());
    console.log(1);
  } finally {
    console.log(2);
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
      const isPublic = yield buyContract.methods.isPublicSale().call();
      console.log(isPublic, 'isPublic');
      const getDiscount = yield buyContract.methods
        .getWhitelistedSalePrice(curAddress, currency)
        .call();
      console.log(getDiscount, 'getDiscount');
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

function* handleCheckCoupon(action) {
  const instanceValue = Web3.getInstance;
  const { currency, couponCode } = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      yield instanceValue.setWeb3();
      const web3: any = instanceValue.getWeb3();
      // check public sell
      const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
      console.log(currency, couponCode, 'buyContract');
      const validateCoupon = yield buyContract.methods
        .validateCoupon(currency, couponCode)
        .call();
      console.log(validateCoupon, 'validateCoupon');
      yield put(actions.getValidateCoupon(validateCoupon));
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
function* watchHandleCheckValidateCoupon() {
  yield takeLatest(actions.checkValidateCoupon, handleCheckCoupon);
}
export function* buyNFTSaga() {
  yield all([
    watchHandleBuyNFT(),
    watchHandleCheckBuyNFT(),
    watchHandleCheckValidateCoupon(),
  ]);
}
