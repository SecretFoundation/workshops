import React, { useState, useEffect } from "react";
import "./App.css";
import { SecretNetworkClient, MetaMaskWallet } from "secretjs";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [count, setCount] = useState(0);

  let codeHash = "cb0560e9559e9b2b2f50a2cbb1ba0a6179022d759db602b4397064245cf4e44b";
  let contractAddress = "secret1pwlv9t4zqnuey9dgprq5qt8zxhgkn8tczka8tu";

  const connectWallet = async () => {
    try {
      const [ethAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = await MetaMaskWallet.create(window.ethereum, ethAddress);
      const secretjs = new SecretNetworkClient({
        url: "https://api.pulsar3.scrttestnet.com",
        chainId: "pulsar-3",
        wallet: wallet,
        walletAddress: wallet.address,
      });
      console.log("Connected to Secret Network", secretjs);
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  };

  const increaseCount = async () => {
    try {
      const [ethAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = await MetaMaskWallet.create(window.ethereum, ethAddress);
      const secretjs = new SecretNetworkClient({
        url: "https://api.pulsar3.scrttestnet.com",
        chainId: "pulsar-3",
        wallet: wallet,
        walletAddress: wallet.address,
      });

      const tx = await secretjs.tx.compute.executeContract(
        {
          sender: wallet.address,
          contract_address: contractAddress,
          msg: {
            increment: {},
          },
          code_hash: codeHash,
        },
        { gasLimit: 100_000 }
      );
      console.log(tx);

      queryCount();
    } catch (error) {
      console.error("Error on increaseCount", error);
    }
  };

  const queryCount = async () => {
    try {
      const [ethAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = await MetaMaskWallet.create(window.ethereum, ethAddress);
      const secretjs = new SecretNetworkClient({
        url: "https://api.pulsar3.scrttestnet.com",
        chainId: "pulsar-3",
        wallet: wallet,
        walletAddress: wallet.address,
      });

      let my_query = await secretjs.query.compute.queryContract({
        contract_address: contractAddress,
        code_hash: codeHash,
        query: { get_count: {} },
      });

      setCount(my_query.count);
    } catch (error) {
      console.error("Error on queryCount", error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      queryCount();
    }
  }, [isConnected]); // Query count when the wallet connects

  return (
    <div className="App">
      <header className="App-header">
        <h5>Current Count: {count}</h5>
        <button onClick={connectWallet} disabled={isConnected}>
          {isConnected ? "Connected" : "Connect Wallet"}
        </button>
        <br></br>
        {/* <button onClick={queryCount}>Query Count</button> */}

        <button onClick={increaseCount}>Increase Count</button>
        <br></br>
      </header>
    </div>
  );
}

export default App;
