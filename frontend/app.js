const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const contractABI = [
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "lmessage", "type": "string" }],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];

let provider, signer, contract;

async function init() {
  if (typeof window.ethereum === 'undefined') {
    alert("Please install MetaMask!");
    return;
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, signer);

  await updateUI();
}

async function updateUI() {
  const message = await contract.getMessage();
  document.getElementById('currentMessage').innerText = message;

  const balance = await contract.getBalance();
  document.getElementById('balance').innerText = ethers.formatEther(balance);
}

async function setMessage() {
  const newMessage = document.getElementById('newMessage').value;
  if (!newMessage) return alert("Enter a message");

  const tx = await contract.setMessage(newMessage);
  await tx.wait();

  await updateUI();
}

window.onload = init;
