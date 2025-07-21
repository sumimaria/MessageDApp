const hre = require("hardhat");

async function main() {
  const Welcome = await hre.ethers.getContractFactory("WelcomeDevelopers");
  const welcome = await Welcome.deploy();
  console.log(`Contract deployed to: ${welcome.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
