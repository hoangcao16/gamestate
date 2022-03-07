import * as React from 'react';

interface DfyAddressProps {
  children: string;
  numShort?: number;
}

export const ShortenWalletAddress = (props: DfyAddressProps) => {
  const walletAddressShort = props.children;

  if (typeof props.numShort === 'undefined') {
    return <>{walletAddressShort}</>;
  }

  return <>{props.children.slice(0, props.numShort) + '...'}</>;
};
