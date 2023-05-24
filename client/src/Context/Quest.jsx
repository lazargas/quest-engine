import React from "react";
import { useState, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

export const QuestContext = React.createContext();

export const QuestProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [initialFollowers, setInitialFollowers] = useState(0);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);
  };

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setError("Please Install MetaMask");

    const account = await window.ethereum.request({ method: "eth_accounts" });

    if (account.length) {
      setCurrentAccount(account[0]);
    } else {
      setError("Please Install MetaMask & Connect, Reload");
    }
  };

  return (
    <QuestContext.Provider
      value={{ checkIfWalletIsConnected, connectWallet, currentAccount, error, code, setCode,initialFollowers,setInitialFollowers }}
    >
      {children}
    </QuestContext.Provider>
  );
};
