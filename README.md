# CUIT-Name-Service_42
 A blockchain-based name service system for CUIT - 42
基于区块链的命名服务系统

##  项目简介
使用 Hardhat 框架开发的去中心化命名服务，实现校园内的数字身份管理和域名解析功能。

##  项目结构
CUIT-Name-Service_42/
├── contracts/ # 智能合约代码
│ ├── CUITNameService.sol
│ └── ...其他合约文件
├── scripts/ # 部署和交互脚本
│ ├── deploy.js
│ └── ...其他脚本
├── frontend/ # 前端界面
│ ├── src/
│ └── public/
├── test/ # 测试用例
│ ├── nameService.test.js
│ └ ...其他测试
├── artifacts/ # 编译产物（自动生成）
├── cache/ # 缓存文件（自动生成）
├── hardhat.config.js # Hardhat 配置文件
├── package.json # 项目依赖配置
└── README.md # 项目说明文档

**##  技术栈
- **区块链开发**: Solidity, Hardhat, Ethers.js
- **前端技术**: React/HTML/CSS/JavaScript
- **测试框架**: Mocha, Chai
- **版本控制**: Git, GitHub

##  快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
npm install**
