## Hardhat Simple Storage v2.9.3

A sample project used to illustrate how to configure and use Hardhat.

### Requirements

**nvm**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

**git**
You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`

**Node.js**
You'll know you've installed Node.js correctly if you can run:

```sh
node --version
```

and get an output like: `vx.x.x`

**Yarn** (instead of npm)
You'll know you've installed Yarn correctly if you can run:

```sh
yarn --version
```

and get an output like: `x.x.x`
You might need to install it with npm or corepack.

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

```bash
npm install -g yarn
```

3. Initialize a new Node.js project:

```sh
npm init -y
```

Or

```sh
yarn init -y
```

4. Install Hardhat:

```sh
npm install --save-dev hardhat@2.9.3
```

Or

```sh
yarn add --dev hardhat@2.9.3
```

5. Run Hardhat:

```sh
npx hardhat
```

Or

```sh
yarn hardhat
```

6. Choose “Create a basic sample project”.

7. Show hardhat info:

```sh
yarn hardhat
```

8. Create ./contracts/SimpleStrage.sol

9. Set solidity verion in ./hardhat.config.js

10. Create ./scripts/deploy.js

11. run:

```sh
yarn add --dev prettier prettier-plugin-solidity
```

12. create ./.prettierrc and ./.prettierignore

13. for use .env in hardhat.config.js file, run:

```sh
yarn add dotenv@14.2.0
```

14. update hardhat.config.js add `require("dotenv").config()`, so it can use var in .env file

15. add some hardhat task by running:

```sh
yarn add --dev @nomiclabs/hardhat-etherscan@3.0.0
yarn add --dev @nomicfoundation/hardhat-verify@2.0.3
yarn add --dev solidity-coverage@0.7.18
```

16. run:

```sh
yarn hardhat verify help
```

then we can see `verify` task need `verify` augument when use `run` to run the task

17. creat ./tasks/block-number.js as our custom task, then in `hardhat.config.js` require the task

18. run:

```sh
yarn hardhat block-number --network sepolia
```

note: use scripts is a good alternative to tasks

19. spin up a node on the local network, run

```sh
yarn hardhat node
```

add the network into hardhat.config.js as `localhost`
then we can run:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

20. use hardhat console, run:

```sh
yarn hardhat console --network localhost
```

console can interact with different chain as scripts do

21. for clean `artifacts` and `cache` folder, run:

```sh
yarn hardhat clean
```

22. creat ./test/test-deploy.js file, run:

```sh
yarn hardhat test
yarn hardhat test --grep store
```

23. hardhat gas reporter, run:

```sh
yarn add --dev hardhat-gas-reporter@1.0.7
```

or

```sh
npm install hardhat-gas-reporter@1.0.7 --save-dev
```

add `require("hardhat-gas-reporter")` and `gasReporter` section in to `hardhat.config.js` file, here we need use coinmarketcap API key

now run:

```sh
yarn hardhat test
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

If you'd like to run your own local Hardhat network, you can run:

```sh
npx hardhat node
```

And then, in a different terminal:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

You should see transactions happen in your terminal that is running `npx hardhat node`.

#### Important Localhost Note

If you use MetaMask with a local network, every time you shut down your node, you'll need to reset your account: Settings -> Advanced -> Reset Account. Don't do this with a MetaMask wallet that has real funds in it.

### Deployment to a Testnet or Mainnet

1. **Setup Environment Variables**

    You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

    - `PRIVATE_KEY`: The private key of your account (like from MetaMask). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
    - `SEPOLIA_RPC_URL`: This is the URL of the Sepolia testnet node you're working with. You can get setup with one for free from Alchemy.

2. **Get Testnet ETH**

    Head over to [faucets.chain.link](https://faucets.chain.link) and get some testnet ETH. You should see the ETH show up in your MetaMask.

3. **Deploy**
    ```sh
    npx hardhat run scripts/deploy.js --network sepolia
    ```
    or
    ```sh
    yarn hardhat run scripts/deploy.js --network sepolia
    ```

### Verify on Etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an API Key from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can add it to your `.env` file as seen in the `.env.example`.

In its current state, if you have your API key set, it will auto-verify Sepolia contracts. However, you can manually verify with:

```sh
npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```

### Linting

To check linting / code formatting:

```sh
yarn lint
```

Or, to fix:

```sh
yarn lint:fix
```
