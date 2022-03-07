// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { Actions as actions } from '.';

import { put, takeLatest, all } from '@redux-saga/core/effects';
import { actions } from '.';
import Web3 from 'services/walletService/initWeb3';
import actionNftAbi from 'services/walletService/config/nftDetail.abi.json';
import { apiNftDetail } from 'services/apiDetailNFt';

function* handleOrderNFT(action) {
  const spender = process.env.REACT_APP_NFT_DETAIL;
  const nftId = action.payload;
  try {
    if (localStorage.getItem('extensionName')) {
      const instanceValue = Web3.getInstance;
      yield instanceValue.setWeb3();
      const web3: any = instanceValue.getWeb3();
      const buyContract = new web3.eth.Contract(actionNftAbi, spender);
      const txData = yield buyContract.methods.tokenURI(nftId).call();
      const collectionData = yield buyContract.methods.contractURI().call();
      const metadata = yield apiNftDetail(txData);
      const metadataCollection = yield apiNftDetail(collectionData);
      yield put(
        actions.orderNFTSuccess({
          ...metadata.data,
          collection: metadataCollection.data,
        }),
      );
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
