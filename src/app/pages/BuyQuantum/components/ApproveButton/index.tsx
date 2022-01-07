import { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { CircularProgress } from '@mui/material';
import Button from '../ButtonQuantum';
import { useDispatch, useSelector } from 'react-redux';
import { useApproveNFT } from './slice';
import { approveNFTSelector } from './slice/selectors';
interface Props {
  curAddress: string;
  tokenSymbol: string;
  toAddress: any;
  amount: string;
}
const ApproveButton = (props: Props) => {
  //init something

  const { curAddress, tokenSymbol, amount } = props;
  const dispatch = useDispatch();
  const { actions } = useApproveNFT();
  useEffect(() => {
    dispatch(
      actions.checkApproveNFTRequest({
        curAddress,
        tokenSymbol,
        amount,
      }),
    );
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('StoreWallet')]);
  //create approve
  const handleApprove = () => {
    dispatch(
      actions.handleApproveNFTRequest({ curAddress, tokenSymbol, amount }),
    );
  };
  const { receipt, allowance, isLoading } = useSelector(approveNFTSelector);
  console.log('alow', allowance);
  return (
    <>
      {allowance! < Number(amount) && isEmpty(receipt) && !isLoading && (
        <Button onclick={handleApprove} margin="0 20px 0 0" disable={false}>
          Approve
        </Button>
      )}
      {allowance! < Number(amount) && !isEmpty(receipt) && !isLoading && (
        <Button margin="0 20px 0 0" disable={true}>
          Approved
        </Button>
      )}
      {allowance! >= Number(amount) && !isLoading && (
        <Button margin="0 20px 0 0" disable={true}>
          Approved
        </Button>
      )}
      {isLoading && (
        <Button margin="0 20px 0 0" disable={true}>
          <CircularProgress size={19} color="inherit" />
        </Button>
      )}
    </>
  );
};

export default ApproveButton;
