import { put, takeLatest, all } from '@redux-saga/core/effects';
import { actions } from '.';
import actionNftAbi from 'services/walletService/config/nftDetail.abi.json';
import { apiNftDetail } from 'services/apiDetailNFt';
import Web3 from 'web3';

function* handleOrderNFT(action) {
  const spender = process.env.REACT_APP_NFT_DETAIL;
  const nftId = action.payload;
  try {
    const web3: any = new Web3('https://rpc-mumbai.maticvigil.com/'); // hardcode

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
  } catch (err) {
    console.log(err, 'err');
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
