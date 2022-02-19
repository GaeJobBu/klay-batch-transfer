import { expect } from "chai";
import { ethers, waffle } from "hardhat";

describe("KlayBatchTransfer", function () {
  it("Deploy and Transfer", async function () {
    const provider = waffle.provider;
    //const [minter] = await ethers.getSigners();
    const [minter, to1, to2, to3, to4, to5] = provider.getWallets();
    const Contract = await ethers.getContractFactory("KlayBatchTransfer");
    const contract = await Contract.deploy();
    await contract.deployed();

    console.log("minter:" + await provider.getBalance(minter.address))
    console.log("to1:" + await provider.getBalance(to1.address))
    console.log("to2:" + await provider.getBalance(to2.address))

/*
    await expect(() => minter.sendTransaction({to: minter.address, value: 200 ethers.}))
      .to.changeEtherBalance(walletTo, 200);

await expect(await wallet.sendTransaction({to: walletTo.address, value: 200}))
  .to.changeEtherBalance(walletTo, 200);

    //set ipfs endpoint
    await nft.setVariableBaseUri(0, ipfsEndpoint);

    //mint 1 Token
    await nft.mint(minter.address, 0);
  
    //mint duplicate
    await expect(nft.mint(minter.address, 0)).to.be.revertedWith("KIP17: token already minted");

    //set token ids for batchmint (1~9999)
    let tokenIds: number[] = [];
    let endId  = 9999;
    for(let i = 1; i <= endId; i++){
      tokenIds.push(i);

      if((i % 200 == 0) || i == endId){
        console.log("batch minting : "+ tokenIds[0] + " ~ " + + tokenIds[tokenIds.length - 1] + " (size:" + tokenIds.length + ")");
        const batchMintTx = await nft.batchMint(minter.address, tokenIds);
        await batchMintTx.wait();
        tokenIds = []; //clear buffer
      }
    }

    //check mint
    expect(await nft.tokenURI(9999)).to.be.equal(ipfsEndpoint + "9999");
    await expect(nft.mint(minter.address, 0)).to.be.revertedWith("Mint limit exceeded");
    await expect(nft.tokenURI(10000)).to.be.revertedWith("KIP17Metadata: URI query for nonexistent token");

    //test batchTrasnfer
    for(let i = 1; i <= 50; i++){
      tokenIds.push(i);
    }
    const batchTransferTx = await nft.batchTransfer(user.address, tokenIds);
    await batchTransferTx.wait();

    expect(await nft.balanceOf(minter.address)).to.be.equal(9950);
    expect(await nft.balanceOf(user.address)).to.be.equal(50);

    //token#99 base uri index is 1
    expect(await nft.tokenURI(99)).to.be.equal(ipfsEndpoint + "99");
    const tokenUriTx = await nft.setTokenUriIndex(99, 1);
    await tokenUriTx.wait();
    expect(await nft.tokenURI(99)).to.be.equal("99");

    //set base uri index1 is https://google.com/
    const baseUriTx = await nft.setVariableBaseUri(1, "https://google.com/");
    await baseUriTx.wait();
    expect(await nft.tokenURI(99)).to.be.equal("https://google.com/" + "99");
    expect(await nft.tokenURI(98)).to.be.equal(ipfsEndpoint + "98");*/

  });
});
