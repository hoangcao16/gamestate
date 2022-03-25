import * as gasInfo from '../supportService/getGasInformation';
import Web3 from '../initWeb3';
// import { filterTokenToAddress } from '../supportService/filterTokenToAddress';
import BigNumber from 'bignumber.js';
import actionBuyAbi from 'services/walletService/config/actionBuy.abi.json';

/**
 * check approve
  @param {string} from format wallet address
  @param {string} spender
 * @returns
 */
const spender = process.env.REACT_APP_BUY_NFT_ADDRESS_MAINNET;

export const testContract = async from => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  // const supportSymbol = JSON.parse(
  //   localStorage.getItem('StoreCryptoCurrency')!,
  // );
  // const tokenAddress = filterTokenToAddress(supportSymbol, tokenSymbol);
  const tokenContract = new web3.eth.Contract(
    actionBuyAbi,
    spender, // sua address coin
  );
  console.log(tokenContract, 'tokenContract');
  const txData = tokenContract.methods.setWhitelistedCurrencyAndPrice(
    '0xF81492f7516B4c3fB6D8cAde00Ecbd18dC05c157',
    true,
    new BigNumber(250).multipliedBy(10 ** 18).toFixed(),
  );
  console.log(txData, 'txData');

  const nonce = await web3.eth.getTransactionCount(from, 'pending');
  // data tx
  const tx = {
    from,
    to: spender, // sua address coin
    value: 0,
    nonce,
    data: txData.encodeABI(),
  };

  const gasData = await gasInfo.getGasInformation(tx);
  // console.log('gasData', gasData);
  return {
    tx,
    gasPrice: gasData.gasPrice,
    gasLimit: gasData.gasLimit,
  };
};
