import React, { useState } from "react";
import "./App.css";
import { SecretNetworkClient, MetaMaskWallet } from "secretjs";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  // your codeHash to go here
  let codeHash = "";
  //your contractAddress to go here
  let contractAddress = "";

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
  };

  const queryCount = async () => {
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet} disabled={isConnected}>
          {isConnected ? "Connected" : "Connect Wallet"}
        </button>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={queryCount}>Query Count</button>
      </header>
    </div>
  );
}

export default App;
