import * as gasInfo from '../supportService/getGasInformation';
import Web3 from '../initWeb3';
import erc20Abi from '../config/erc20.abi.json';
import gsErc20Abi from 'services/walletService/config/gs-erc20.abi.json';
import softNftAbi from '../config/softNft.abi.json';
// import { filterTokenToAddress } from '../supportService/filterTokenToAddress';
import BigNumber from 'bignumber.js';

/**
 * check approve
  @param {string} from format wallet address
  @param {string} spender
 * @returns
 */
const coinAddress = process.env.REACT_APP_COIN_ADDRESS_MAINNET;
export const checkApprove = async (
  from,
  tokenSymbol,
  spender,
  amountApprove,
) => {
  if (tokenSymbol === 'MATIC') {
    return amountApprove;
  } else {
    const instanceValue = Web3.getInstance;
    const web3: any = instanceValue.getWeb3();
    // const supportSymbol = JSON.parse(
    //   localStorage.getItem('StoreCryptoCurrency')!,
    // );
    // const tokenAddress = filterTokenToAddress(supportSymbol, tokenSymbol);
    const tokenContract = new web3.eth.Contract(
      erc20Abi,
      coinAddress, //sua address coin
    );

    const allowance = await tokenContract.methods
      .allowance(from, spender)
      .call();
    return allowance;
  }
};

/**
 * create approve
  @param {} from format wallet address
  @param {} tokenSymbol
  @param {} amount
  @param {} spender
 * @returns
 */
export const createApprove = async (
  from,
  tokenSymbol,
  spender,
  amountApprove,
) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  // const supportSymbol = JSON.parse(
  //   localStorage.getItem('StoreCryptoCurrency')!,
  // );
  // const tokenAddress = filterTokenToAddress(supportSymbol, tokenSymbol);
  const tokenContract = new web3.eth.Contract(
    gsErc20Abi,
    coinAddress, // sua address coin
  );
  const txData = tokenContract.methods.approve(
    spender,
    new BigNumber(amountApprove).multipliedBy(10 ** 6).toFixed(),
  );
  console.log(txData, 'txData');
  const nonce = await web3.eth.getTransactionCount(from, 'pending');
  console.log(nonce, 'nonce');

  // data tx
  const tx = {
    from,
    to: coinAddress, // sua address coin
    value: 0,
    nonce,
    data: txData.encodeABI(),
  };
  console.log(tx, 'tx');

  const gasData = await gasInfo.getGasInformation(tx);
  console.log(gasData, 'gasData');
  // console.log('gasData', gasData);
  return {
    tx,
    gasPrice: 40000000000, //gasData.gasPrice,
    gasLimit: gasData.gasLimit,
  };
};

/**
 * check isApprovedForAll contract collection nft token
  @param {string} from format wallet address
  @param {string} contractSale
  @param {string} collectionAddress
 * @returns
 */
export const isApprovedForAll = async (
  from,
  contractSale,
  collectionAddress,
) => {
  console.log(
    'from, contractSale, collectionAddress',
    from,
    contractSale,
    collectionAddress,
  );
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  console.log(web3);
  const collectionSoftNftContract = new web3.eth.Contract(
    softNftAbi,
    collectionAddress,
  );
  const allowance = await collectionSoftNftContract.methods
    .isApprovedForAll(from, contractSale)
    .call();
  return allowance;
};

/**
   * create setApprovalForAll contract collection nft token
    @param {} from format wallet address
    @param {} contractSale
    @param {boolean} condition  
    @param {} collectionAddress
   * @returns
   */
export const setApprovalForAll = async (
  from,
  contractSale,
  condition,
  collectionAddress,
) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();

  const collectionSoftNftContract = new web3.eth.Contract(
    softNftAbi,
    collectionAddress,
  );

  const txData = collectionSoftNftContract.methods.setApprovalForAll(
    contractSale,
    condition,
  );

  const nonce = await web3.eth.getTransactionCount(from, 'pending');
  // data tx
  const tx = {
    from,
    to: collectionAddress,
    value: 0,
    nonce,
    data: txData.encodeABI(),
  };

  const gasData = await gasInfo.getGasInformation(tx);

  return {
    tx,
    gasPrice: gasData.gasPrice,
    gasLimit: gasData.gasLimit,
  };
};
