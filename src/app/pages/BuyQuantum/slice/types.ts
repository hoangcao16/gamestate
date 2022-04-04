/* --- STATE --- */
export interface BuyNftState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isSuccessBc: boolean;
  isPublicSell?: boolean;
  salePriceBc: number;
  discountPercentageBc: string;
  isAlreadyBought: boolean;

  isValidCoupon: boolean;
  discountedPrice: number;
}
