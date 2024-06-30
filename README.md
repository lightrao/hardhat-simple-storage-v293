## Hardhat Simple Storage v2.9.3

A sample project used to illustrate how to configure and use Hardhat.

### Requirements

**nvm**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

**git**

To verify git installation, run:

```sh
git --version
```

You should see output similar to `git version x.x.x`.

**Node.js**

To verify Node.js installation, run:

```sh
node --version
```

You should see output similar to `vx.x.x`.

**Yarn** (instead of npm)

To verify Yarn installation, run:

```sh
yarn --version
```

You should see output similar to `x.x.x`. Yarn might need to be installed with npm or corepack.

### Quickstart

1. Clone the project repository and navigate into it:

    ```sh
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install the project dependencies:

    ```sh
    npm ci
    ```

    Or

    ```sh
    yarn install --frozen-lockfile
    ```

3. Run Hardhat:

    ```sh
    npx hardhat
    ```

    Or

    ```sh
    yarn hardhat
    ```

### Create Project from Scratch

1. Create a new project directory and navigate into it:

    ```sh
    mkdir <repository_directory>
    cd <repository_directory>
    ```

2. Install and use the correct Node.js version:

    ```sh
    nvm ls
    nvm install 16.20.2
    nvm use 16.20.2
    ```

3. Install Yarn globally:

    ```sh
    npm install -g yarn
    ```

4. Initialize a new Node.js project:

    ```sh
    npm init -y
    ```

    Or

    ```sh
    yarn init -y
    ```

5. Install Hardhat:

    ```sh
    npm install --save-dev hardhat@2.9.3
    ```

    Or

    ```sh
    yarn add --dev hardhat@2.9.3
    ```

6. Run Hardhat:

    ```sh
    npx hardhat
    ```

    Or

    ```sh
    yarn hardhat
    ```

7. Choose “Create a basic sample project”.

8. Show Hardhat info:

    ```sh
    yarn hardhat
    ```

9. Create `./contracts/SimpleStorage.sol`.

10. Set Solidity version in `./hardhat.config.js`.

11. Create `./scripts/deploy.js`.

12. Install Prettier and the Prettier Solidity plugin:

    ```sh
    yarn add --dev prettier prettier-plugin-solidity
    ```

13. Create `.prettierrc` and `.prettierignore`.

14. To use environment variables in the `hardhat.config.js` file, run:

    ```sh
    yarn add dotenv@14.2.0
    ```

15. Update `hardhat.config.js` to add `require("dotenv").config()`, allowing it to use variables in the `.env` file.

16. Add Hardhat tasks:

    ```sh
    yarn add --dev @nomiclabs/hardhat-etherscan@3.0.0 @nomicfoundation/hardhat-verify@2.0.3
    ```

17. Run:

    ```sh
    yarn hardhat verify help
    ```

    This shows the `verify` task requires arguments when used with `run`.

18. Create `./tasks/block-number.js` as a custom task, then in `hardhat.config.js`, require the task.

19. Run:

    ```sh
    yarn hardhat block-number --network sepolia
    ```

    Note: Using scripts is a good alternative to tasks.

20. To spin up a node on the local network, run:

    ```sh
    yarn hardhat node
    ```

    Add the network into `hardhat.config.js` as `localhost`, then run:

    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```

21. Use Hardhat console, run:

    ```sh
    yarn hardhat console --network localhost
    ```

    The console can interact with different chains as scripts do.

22. To clean the `artifacts` and `cache` folders, run:

    ```sh
    yarn hardhat clean
    ```

23. Create `./test/test-deploy.js`, then run:

    ```sh
    yarn hardhat test
    yarn hardhat test --grep store
    ```

24. Install Hardhat gas reporter:

    ```sh
    yarn add --dev hardhat-gas-reporter@1.0.7
    ```

    Or

    ```sh
    npm install hardhat-gas-reporter@1.0.7 --save-dev
    ```

    Add `require("hardhat-gas-reporter")` and `gasReporter` section into `hardhat.config.js`. Use a CoinMarketCap API key.

    Now run:

    ```sh
    yarn hardhat test
    ```

25. Install Solidity coverage:

    ```sh
    npm install --save-dev solidity-coverage@0.7.18
    ```

    Or

    ```sh
    yarn add --dev solidity-coverage@0.7.18
    ```

    Add `require("solidity-coverage")` into `hardhat.config.js`, then run:

    ```sh
    yarn hardhat coverage
    ```

### Usage

#### Deploy

To deploy the contract, run:

```sh
npx hardhat run scripts/deploy.js --network hardhat
```

#### Testing

To run the tests, execute:

```sh
npx hardhat test
```

#### Test Coverage

To check test coverage, run:

```sh
npx hardhat coverage
```

#### Estimate Gas

You can estimate how much gas things cost by running:

```sh
npx hardhat test
```

And you'll see an output file called `gas-report.txt`.

#### Local Deployment

To run your own local Hardhat network:

```sh
npx hardhat node
```

In a different terminal:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

You should see transactions happening in the terminal running `npx hardhat node`.

#### Important Localhost Note

If you use MetaMask with a local network, every time you shut down your node, you'll need to reset your account: Settings -> Advanced -> Reset Account. Do not do this with a MetaMask wallet that has real funds in it.

### Deployment to a Testnet or Mainnet

1. **Setup Environment Variables**

    Set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. Add them to a `.env` file, similar to `.env.example`.

    - `PRIVATE_KEY`: The private key of your account (like from MetaMask). **NOTE:** Use a key without any real funds for development.
    - `SEPOLIA_RPC_URL`: The URL of the Sepolia testnet node you're working with. Get setup with one for free from Alchemy.

2. **Get Testnet ETH**

    Visit [faucets.chain.link](https://faucets.chain.link) to get some testnet ETH. You should see the ETH show up in your MetaMask.

3. **Deploy**

    ```sh
    npx hardhat run scripts/deploy.js --network sepolia
    ```

    Or

    ```sh
    yarn hardhat run scripts/deploy.js --network sepolia
    ```

### Verify on Etherscan

To verify deployment on a testnet or mainnet, get an API Key from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. Add it to your `.env` file as seen in the `.env.example`.

If your API key is set, it will auto-verify Sepolia contracts. Manually verify with:

```sh
npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```

### Linting

To check linting/code formatting:

```sh
yarn lint
```

To fix:

```sh
yarn lint:fix
```