import Web3 from '../initWeb3';
import actionNftAbi from '../config/actionNft.abi.json';
export const getTokenId = async (
  address: string,
  spender = process.env.REACT_APP_NFT_ADDRESS,
) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const buyContract = new web3.eth.Contract(actionNftAbi, spender);

  try {
    const txData: any = await buyContract.methods
      .getOwnedTokenIds(address)
      .call();
    return {
      txData,
    };
  } catch (error) {
    console.log(error);
  }
};
