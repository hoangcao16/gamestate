import * as gasInfo from '../supportService/getGasInformation';
import Web3 from '../initWeb3';
import actionBuyAbi from '../config/actionBuy.abi.json';

/**
 * buy
 * @param {*} from (vi hien tai)
 * @param {*} payableAmount
 * @param {*} tokenId
 * @param {*} spender (env)
 * @returns
 */
export const buy = async (
  from,
  payableAmount,
  tokenSymbol,
  spender = process.env.REACT_APP_NFT_SALES_ADDRESS,
  currency = process.env.REACT_APP_COIN_ADDRESS,
) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionBuyAbi, spender);

  if (tokenSymbol.toUpperCase() !== 'MATIC') {
    payableAmount = 0;
  }
  try {
    const txData = await buyContract.methods.buyNFTMint(currency);
    const nonce = await web3.eth.getTransactionCount(from, 'pending');
    console.log(txData);
    // Create transaction
    const tx = {
      from,
      to: spender,
      value: payableAmount,
      nonce,
      data: txData.encodeABI(),
    };

    const gasData = await gasInfo.getGasInformation(tx);

    return {
      tx,
      gasPrice: gasData.gasPrice,
      gasLimit: gasData.gasLimit,
    };
  } catch (error) {
    console.log(error);
  }
};
export const getPrice = async (
  tokenId,
  spender = process.env.REACT_APP_NFT_SALES_ADDRESS,
) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionBuyAbi, spender);

  try {
    const txData = await buyContract.methods.getNFTInfo(tokenId).call();
    return {
      txData,
    };
  } catch (error) {
    console.log(error);
  }
};
// export const getNftOnSellOf = async (
//   from,
//   spender = process.env.REACT_APP_NFT_SALES_ADDRESS,
// ) => {
//   const instanceValue = Web3.getInstance;
//   const web3: any = instanceValue.getWeb3();
//   const buyContract = new web3.eth.Contract(actionBuyAbi, spender);
//   try {
//     const txData = await buyContract.methods.getNFTsOnSellOf(from).call();
//     return {
//       txData,
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };
