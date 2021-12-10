// Check Connect wallet address localstorage
export const getCurrentAddress = () => {
  const userToken = localStorage.getItem('StoreWallet');
  if (userToken) {
    return userToken;
  } else {
    return null;
  }
};
