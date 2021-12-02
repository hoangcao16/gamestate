// import DfyButton from 'app/components/DfyButton';
import { useEffect, useState } from 'react';
import {
  checkApprove,
  createApprove,
} from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { isEmpty } from 'lodash';
import { CircularProgress } from '@mui/material';
import BigNumber from 'bignumber.js';
import Web3 from 'services/walletService/initWeb3';
import Button from '../ButtonQuantum';
interface Props {
  curAddress: string;
  tokenSymbol: string;
  toAddress: string;
  amount: string;
  handleAction: any;
}

const ApproveButton = (props: Props) => {
  //init something
  const { curAddress, tokenSymbol, toAddress, amount, handleAction } = props;
  const [allowance, setAllowance] = useState<Number>();
  const [receipt, setReceipt] = useState();
  const [loading, setLoading] = useState(false);
  const intanceValue = Web3.getInstance;

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
  //checkApprove
  useEffect(() => {
    if (localStorage.getItem('extensionName')) {
      (async () => {
        await intanceValue.setWeb3();
        const res = await checkApprove(
          curAddress,
          tokenSymbol,
          toAddress,
          amount,
        );
        const resDiv18 = Number(
          new BigNumber(res).dividedBy(10 ** 18).toFixed(),
        );
        console.log('div', res, resDiv18);
        if (resDiv18 >= Number(amount)) {
          handleAction(true);
        }
        setAllowance(resDiv18);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(
    'amount111:',
    amount,
    'recept:',
    receipt,
    'allowance:',
    allowance,
  );
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
