// Import the `task` function from Hardhat's configuration module
const { task } = require("hardhat/config");

// Define a new Hardhat task named "block-number" with a description
task("block-number", "Prints the current block number")

  // Set the action for the task, which is an asynchronous function
  .setAction(

    // Define the asynchronous function with task arguments (`taskArgs`) and Hardhat runtime environment (`hre`)
    async (taskArgs, hre) => {
      // Retrieve the current block number using the provider from the ethers.js library within Hardhat
      const blockNumber = await hre.ethers.provider.getBlockNumber();

      // Print the current block number to the console
      console.log(`Current block number: ${blockNumber}`);
    }
  );

// Export an empty module.exports object to ensure Hardhat loads this file
module.exports = {};
