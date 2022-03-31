/* --- STATE --- */
export interface ApproveNFTState {
  isLoading?: boolean;
  isAllow?: boolean;
  receipt?: any;
  allowance?: number;
  isPublicSell?: boolean;
  isSuccessBc: boolean;
  salePriceBc: number;
  discountPercentageBc: string;
  isAlreadyBought: boolean;
}
