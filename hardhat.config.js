// Import Hardhat plugins and dependencies
require("@nomiclabs/hardhat-waffle") // Plugin for integrating Waffle, a testing framework for Ethereum smart contracts
require("hardhat-gas-reporter") // Plugin for generating gas usage reports
require("./tasks/block-number") // Custom task definition for retrieving the current block number
// require("@nomiclabs/hardhat-etherscan"); // Plugin for verifying contracts on Etherscan (commented out)
require("dotenv").config() // Load environment variables from .env file
require("solidity-coverage") // Plugin for generating test coverage reports for Solidity contracts
require("@nomicfoundation/hardhat-verify") // Plugin for contract verification

// Exporting an object to set up your Hardhat configuration
// Learn more about configuration options at https://hardhat.org/config/
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Retrieve environment variables or set default values
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    // Set the default network to "hardhat"
    defaultNetwork: "hardhat",
    // Define network configurations
    networks: {
        hardhat: {}, // Default Hardhat local network configuration
        sepolia: {
            // Configuration for the Sepolia testnet
            url: SEPOLIA_RPC_URL, // RPC URL for connecting to Sepolia
            accounts: [PRIVATE_KEY], // Array of private keys for deploying contracts
            chainId: 11155111, // Chain ID for Sepolia
        },
        localhost: {
            // Configuration for local Ethereum node
            url: "http://localhost:8545", // Localhost RPC URL
            // accounts: "hardhat supply", // Uncomment and provide accounts if needed
            chainId: 31337, // Chain ID for local network
        },
    },
    // Specify Solidity compiler version
    solidity: "0.8.8",
    // Etherscan API key for contract verification
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    // Configuration for gas reporter
    gasReporter: {
        enabled: false, // Disable gas reporter by default
        currency: "USD", // Report gas costs in USD
        outputFile: "gas-report.txt", // Output file for gas report
        noColors: true, // Disable colors in gas report
        coinmarketcap: COINMARKETCAP_API_KEY, // API key for CoinMarketCap to fetch gas prices
        // token: "MATIC", // Uncomment and set token to report gas costs in MATIC (default is ETH)
    },
}
