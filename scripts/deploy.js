// Import necessary modules from hardhat
const { ethers, run, network } = require("hardhat")
// `run` allows us to run any hardhat task

// Define an asynchronous main function to deploy and interact with the contract
async function main() {
    // Get the contract factory for "SimpleStorage"
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")

    // Deploy the SimpleStorage contract
    const simpleStorage = await SimpleStorageFactory.deploy()

    // Wait until the contract is deployed
    // Note: In ethers.js version 6 and above, this function has been changed
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)

    // Check if we are on a specific network (chainId: 11155111) and if ETHERSCAN_API_KEY is set
    // This is useful for verification on networks like Sepolia testnet
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")

        // Wait for 6 block confirmations
        // Note: In ethers.js version 6 and above, the way to wait for transaction confirmations has changed
        await simpleStorage.deploymentTransaction().wait(6)
        await verify(simpleStorage.target, [])
    }

    // Retrieve the current value stored in the contract
    const currentValue = await simpleStorage.retrieve()
    console.log(`Current Value is: ${currentValue}`)

    // Update the stored value to 7
    const transactionResponse = await simpleStorage.store(7)
    // Wait for 1 block confirmation for the transaction to be mined
    await transactionResponse.wait(1)
    // Retrieve the updated value
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)
}

// Define an asynchronous function to verify the contract on Etherscan
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        // Run the hardhat verify task
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        // Check if the error message contains "already verified"
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

// Execute the main function
main()
    .then(() => process.exit(0)) // Exit the process if the script runs successfully
    .catch((error) => {
        console.error(error)
        process.exit(1) // Exit the process with an error code if an error occurs
    })
