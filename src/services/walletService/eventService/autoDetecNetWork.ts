const Moralis = require('moralis');

export const changeNetWork = async function () {
  if (localStorage.hasOwnProperty('extensionName')) {
    // const chainId = await Moralis.getChainId();
    let id, idNetWork, chainName;
    if (process.env.REACT_APP_BLOCKCHAIN_NETWORK_MAINNET === 'MAINNET') {
      id = '0x38';
      idNetWork = 56;
      chainName = 'Smart Chain';
      autoSwitchNetWork(id, idNetWork, chainName);
    } else if (process.env.REACT_APP_BLOCKCHAIN_NETWORK_MAINNET === 'TESTNET') {
      id = '0x61';
      idNetWork = 97;
      chainName = 'Smart Chain - Testnet';
      autoSwitchNetWork(id, idNetWork, chainName);
    } else if (process.env.REACT_APP_BLOCKCHAIN_NETWORK_MAINNET === 'POLYGON') {
      id = 80001;
      idNetWork = 80001;
      chainName = 'Polygon Testnet';
      autoSwitchNetWork(id, idNetWork, chainName);
    } else if (
      process.env.REACT_APP_BLOCKCHAIN_NETWORK_MAINNET === 'POLYGON_MAINNET'
    ) {
      id = 137;
      idNetWork = 137;
      chainName = 'Polygon Mainnet';
      autoSwitchNetWork(id, idNetWork, chainName);
    }
  } else {
    window.alert('you need connect wallet, if you want use network!');
  }
};

// switch Network
const autoSwitchNetWork = async (id, idNetWork, chainName) => {
  try {
    await Moralis.switchNetwork(id);
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        autoAddNetWork(idNetWork, chainName);
      } catch (addError) {
        console.log('Error', addError);
      }
    }
  }
};

//add Network
const autoAddNetWork = async (idNetWork, chainName) => {
  const currencyName = 'MATIC';
  const currencySymbol = 'MATIC';

  await Moralis.addNetwork(
    idNetWork,
    chainName,
    currencyName,
    currencySymbol,
    process.env.REACT_APP_RPC_NETWORK_MAINNET,
    process.env.REACT_APP_BLOCK_EXPLORER_URL_MAINNET,
  );
};
