import { expect } from "chai";
import { ethers, waffle } from "hardhat";

describe("KlayBatchTransfer", function () {
  it("Deploy and Transfer", async function () {
    const provider = waffle.provider;
    //const [minter] = await ethers.getSigners();
    const [minter, to1, to2, to3] = provider.getWallets();
    const Contract = await ethers.getContractFactory("KlayBatchTransfer");
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log("minter:" + await provider.getBalance(minter.address))
    console.log("to1:" + await provider.getBalance(to1.address))
    console.log("to2:" + await provider.getBalance(to2.address))
    console.log("to3:" + await provider.getBalance(to3.address))
    
    let klay50:string = ethers.utils.parseUnits("50", "ether").toString();
    let klay100:string = ethers.utils.parseEther("100").toString();
    let klay150:string = ethers.utils.parseEther("150").toString();

    let toList:string[] = [to1.address, to2.address, to3.address]
    let valueList:string[] = [klay50, klay100, klay150]
    
    await expect(contract.batchTransfer(toList, valueList, {value : ethers.utils.parseUnits("199", "ether")})).to.be.revertedWith("Incorrect transfer amount");
    await contract.batchTransfer(toList, valueList, {value : ethers.utils.parseUnits("300", "ether").toString()});

    console.log("minter:" + await provider.getBalance(minter.address))
    console.log("to1:" + await provider.getBalance(to1.address))
    console.log("to2:" + await provider.getBalance(to2.address))
    console.log("to3:" + await provider.getBalance(to3.address))

  });
});