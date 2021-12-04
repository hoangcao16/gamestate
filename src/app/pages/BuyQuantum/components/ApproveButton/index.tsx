import { useState, useEffect } from 'react';
import { createApprove } from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { isEmpty } from 'lodash';
import { CircularProgress } from '@mui/material';
import Button from '../ButtonQuantum';
import { checkApprove } from 'services/walletService/approveService/approve';
import Web3 from 'services/walletService/initWeb3';
import BigNumber from 'bignumber.js';
interface Props {
  curAddress: string;
  tokenSymbol: string;
  toAddress: any;
  amount: string;
  handleAction: any;
}
const ApproveButton = (props: Props) => {
  //init something
  const instanceValue = Web3.getInstance;
  const [receipt, setReceipt] = useState();
  const [loading, setLoading] = useState(false);
  const [allowance, setAllowance] = useState<Number>();
  const { curAddress, tokenSymbol, toAddress, amount, handleAction } = props;

  //get price
  useEffect(() => {
    if (localStorage.getItem('extensionName')) {
      (async () => {
        await instanceValue.setWeb3();
        // Check approve
        const res = await checkApprove(
          curAddress,
          tokenSymbol,
          toAddress,
          amount,
        );
        const resDiv18 = Number(
          new BigNumber(res).dividedBy(10 ** 18).toFixed(),
        );
        if (resDiv18 >= Number(amount)) {
          handleAction(true);
        } else {
          handleAction(false);
        }
        setAllowance(resDiv18);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('StoreWallet')]);
  //create approve
  const handleApprove = async () => {
    setLoading(true);
    try {
      const tx = await createApprove(
        curAddress,
        tokenSymbol,
        toAddress,
        amount,
      );
      console.log('tx', tx);
      const receipt = await signAndSendTx(tx);
      setReceipt(receipt);
      setLoading(false);
      handleAction(true);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      {allowance! < Number(amount) && isEmpty(receipt) && loading === false && (
        <Button onclick={handleApprove} margin="0 20px 0 0" disable={false}>
          Approve
        </Button>
      )}
      {allowance! < Number(amount) && !isEmpty(receipt) && loading === false && (
        <Button margin="0 20px 0 0" disable={true}>
          Approved
        </Button>
      )}
      {allowance! >= Number(amount) && loading === false && (
        <Button margin="0 20px 0 0" disable={true}>
          Approved
        </Button>
      )}
      {loading === true && (
        <Button margin="0 20px 0 0" disable={true}>
          <CircularProgress size={19} color="inherit" />
        </Button>
      )}
    </>
  );
};

export default ApproveButton;
