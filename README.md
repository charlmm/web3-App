# Project Title

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Web 3.0 App featuring Blockchain transactions (send, receive and view transactions as created).
Build with reactjs using Vite, solidity as the smartcontract language.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

1: Register an account with alchemy at <a href="https://www.alchemy.com/">Alchemy</a>
2: Install metamask Extension
3: Register an account with giphy at <a href="https://giphy.com/">Giphy</a>

### Installing

Clone this repo.

cd ./smart_contract

npm install

Go to alchemy and create a project on the goerli test network.

open the hardhat.config.js file and 
    1: add the link to your project <APIKEY>
    2: open metamask and copy the private key of your account and add it to the account array

run "npx hardhat run scripts/deploy.js --network goerli"  and copy the deployment address from your terminal.

paste/replace the address in terminal in your client/src/utils/constants.js file as you contractAddress.

Under smart_contract/artifacts/Transactions.sol, copy the Transactions.json file and paste it in client/src/utils/

cd ..

cd client

rename .copy.env file to .env

Create an app in Giphy and add its APIKEY in .env file. 

npm install

run "npm run dev"
