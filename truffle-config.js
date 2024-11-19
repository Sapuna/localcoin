const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/39b41d3daf5945ddaa2e191759cd3ebc`),
      network_id: 11155111, // Sepolia's id
      gas: 900000, // Set a higher gas limit if needed
      gasPrice: 20000000000, // 20 gwei
      confirmations: 3, // Increase confirmations to allow for network latency
      timeoutBlocks: 200, // Increased timeout for deployment
      skipDryRun: true, // Skip dry run for public networks
      networkCheckTimeout: 1000000, // Set a very high timeout for network connection in ms (5 minutes)
    },
    development: {
      host: "10.9.91.7", // Localhost (default: none)
      port: 7555, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.5.5", // Specify exact compiler version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  db: {
    enabled: false,
  },
};
