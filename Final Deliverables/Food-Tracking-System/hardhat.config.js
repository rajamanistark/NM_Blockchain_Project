require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0x20775d300BdE943Ac260995E977fb915fB01f399`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};