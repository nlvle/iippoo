require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts",
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    // base
  }
};