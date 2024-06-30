// Import necessary modules from hardhat and chai
const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// Describe the test suite for the SimpleStorage contract
describe("SimpleStorage", function () {
    // Declare variables to hold the contract factory and the deployed contract instance
    let simpleStorageFactory, simpleStorage

    // Hook that runs before each test case
    beforeEach(async function () {
        // Get the contract factory for SimpleStorage
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        // Deploy a new instance of SimpleStorage
        simpleStorage = await simpleStorageFactory.deploy()
    })

    // Test case to check the initial value of favorite number
    it("Should start with a favorite number of 0", async function () {
        // Retrieve the current value of favorite number from the contract
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"

        // Assert that the current value is equal to the expected value (0)
        assert.equal(currentValue.toString(), expectedValue)
        // Alternatively, you can use expect syntax
        // expect(currentValue.toString()).to.equal(expectedValue);
    })

    // Test case to check the update functionality of store function
    it("Should update when we call store", async function () {
        const expectedValue = "7"
        // Call the store function to update the favorite number
        const transactionResponse = await simpleStorage.store(expectedValue)
        // Wait for the transaction to be mined
        await transactionResponse.wait(1)

        // Retrieve the updated value of favorite number
        const currentValue = await simpleStorage.retrieve()
        // Assert that the updated value is equal to the expected value (7)
        assert.equal(currentValue.toString(), expectedValue)
    })

    // Extra test case to check the functionality of people struct and array
    it("Should work correctly with the people struct and array", async function () {
        const expectedPersonName = "Patrick"
        const expectedFavoriteNumber = "16"
        // Call the addPerson function to add a new person to the contract
        const transactionResponse = await simpleStorage.addPerson(
            expectedPersonName,
            expectedFavoriteNumber,
        )
        // Wait for the transaction to be mined
        await transactionResponse.wait(1)

        // Retrieve the first person from the people array
        const { favoriteNumber, name } = await simpleStorage.people(0)

        // Assert that the name and favorite number are equal to the expected values
        assert.equal(name, expectedPersonName)
        assert.equal(favoriteNumber, expectedFavoriteNumber)
    })
})
