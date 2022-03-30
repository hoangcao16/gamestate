import * as gasInfo from '../supportService/getGasInformation';
import Web3 from '../initWeb3';
import gsErc20Abi from '../config/gs-erc20.abi.json';
// import { filterTokenToAddress } from '../supportService/filterTokenToAddress';
import BigNumber from 'bignumber.js';

/**
 * check approve
  @param {string} from format wallet address
  @param {string} spender
 * @returns
 */
const currency = process.env.REACT_APP_COIN_ADDRESS;

export const testTransfer = async from => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  // const supportSymbol = JSON.parse(
  //   localStorage.getItem('StoreCryptoCurrency')!,
  // );
  // const tokenAddress = filterTokenToAddress(supportSymbol, tokenSymbol);
  const tokenContract = new web3.eth.Contract(
    gsErc20Abi,
    currency, // sua address coin
  );
  console.log(tokenContract, 'tokenContract');
  const txData = tokenContract.methods.transfer(
    '0x082F681445a90750745b7D0F4BD383eD7c824f3d',
    new BigNumber(5000).multipliedBy(10 ** 18).toFixed(),
  );
  console.log(txData, 'txData');

  const nonce = await web3.eth.getTransactionCount(from, 'pending');
  // data tx
  const tx = {
    from,
    to: currency, // sua address coin
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
