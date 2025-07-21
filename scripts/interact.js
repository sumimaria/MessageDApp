const hre = require("hardhat");

async function main() {
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const Welcome = await hre.ethers.getContractFactory("WelcomeDevelopers");
  const welcome = await Welcome.attach(contractAddress);

  let message = await welcome.getMessage();
  console.log("Current Message:", message);

  const tx = await welcome.setMessage("Hello from Hardhat!");
  await tx.wait();

  message = await welcome.getMessage();
  console.log("Updated Message:", message);

  const balance = await welcome.getBalance();
  console.log("Contract Balance:", hre.ethers.utils.formatEther(balance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
