require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "link to alchemy project account",
      accounts: ['<connected metamask private key']
    },
   },
};
