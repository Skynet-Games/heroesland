require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
// let bscProvider = new HDWalletProvider(
//   process.env.PRIVATE_KEY_ADMIN,
//   process.env.BSC_ENDPOINT
// );

let bscProvider = new HDWalletProvider(
  "4a76d8fc578ae9d67bbd544b4d42c1117a7098b517abe0007655fab2d859346c",
  "https://data-seed-prebsc-1-s1.binance.org:8545"
  
);

module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   network_id: "*",
    // },
    bsc_testnet: {
      provider: bscProvider,
      network_id: 97,
      gas: 3000000,
      gasPrice: 12000000000,
      skipDryRun: true,
    },
  },
  plugins: ['truffle-plugin-verify', 'truffle-contract-size'],
  // api_keys: {
  //   bscscan: "V8B7NF8DT8RT2NYK9EJ9Z2E1TM24R3JP47"
  // },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 500,
        },
      },
    },
  },
};
