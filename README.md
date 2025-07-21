# Welcome Developers DApp

A minimal decentralized application (DApp) that interacts with an Ethereum smart contract using MetaMask and Ethers.js.

## 🧾 Features

- Connect to MetaMask
- View the welcome message from the smart contract
- Update the message on the blockchain
- Display current contract message
- Frontend deployed on Vercel

## 🧱 Smart Contract

This frontend interacts with the following Solidity contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract WelcomeDevelopers {
    string smessage = "Welcome Developers to Ethereum !";

    function getMessage() public view returns (string memory) {
        return smessage;
    }

    function setMessage(string memory lmessage) public {
        smessage = lmessage;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

``` 

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/welcome-dapp.git
cd welcome-dapp

🚀 How to Run Locally
1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/welcome-dapp.git
cd welcome-dapp

2. Install Dependencies
```bash
npm install


3. Compile the Smart Contract
```bash
npx hardhat compile

4. Deploy the Contract Locally
First, start a local Hardhat network:
```bash
npx hardhat node
In another terminal window, deploy the contract:
```bash
npx hardhat run scripts/deploy.js --network localhost
After deployment, copy the deployed contract address. You'll use it in the frontend.

🌍 Host Frontend with Vercel
1. Navigate to Frontend Folder
```bash
cd frontend


2. Set the Contract Address
Update the contractAddress variable in your index.html file:
```bash
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";


3. Deploy on Vercel
Push your project to GitHub

Go to https://vercel.com

Import the GitHub repo

Choose frontend as the root directory (if needed)

Click Deploy

Your frontend will be live on a Vercel URL.

💡 Requirements
MetaMask extension installed in your browser

Node.js and npm

Vercel account (free)

Python (for local frontend preview if needed)

🔍 To Serve Frontend Locally:
From the frontend/ folder:

bash
Copy
Edit
python3 -m http.server
Then go to:

arduino
Copy
Edit
http://localhost:8000
