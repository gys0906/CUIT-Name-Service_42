require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",  // 保留第一个分支的配置
      chainId: 31337
    },
    ganache: {
      url: "http://127.0.0.1:7545",  // 从第一个分支保留
      chainId: 1337
    },
    hardhat: {
      chainId: 1337  // 从第二个分支添加
    }
  }
};