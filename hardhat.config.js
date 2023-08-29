require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys= process.env.PRIVATE_KEY|| ""
/** @type import('hardhat/config').HardhatUserConfig */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {},
    mumbai: {
      url: process.env.MUMBAI_URL||"",
      chainID: 80001,
      accounts: process.env.PRIVATE_KEY,
    },
  },
};
