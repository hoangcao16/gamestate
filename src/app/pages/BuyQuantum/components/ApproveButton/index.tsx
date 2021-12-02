import { useState } from 'react';
import { createApprove } from 'services/walletService/approveService/approve';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { isEmpty } from 'lodash';
import { CircularProgress } from '@mui/material';
import Button from '../ButtonQuantum';
interface Props {
  curAddress: string;
  tokenSymbol: string;
  toAddress: string;
  amount: string;
  handleAction: any;
  allowance: any;
}

const ApproveButton = (props: Props) => {
  //init something
  const {
    curAddress,
    tokenSymbol,
    toAddress,
    amount,
    handleAction,
    allowance,
  } = props;
  const [receipt, setReceipt] = useState();
  const [loading, setLoading] = useState(false);
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
