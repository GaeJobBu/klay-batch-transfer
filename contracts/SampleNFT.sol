pragma solidity ^0.5.6;

import "./utils/Strings.sol";
import "./klaytn-contracts/token/KIP17/KIP17Full.sol";
import "./klaytn-contracts/token/KIP17/KIP17Mintable.sol";
import "./klaytn-contracts/token/KIP17/KIP17Pausable.sol";

// 온체인 트리거 기반 가변 URI를 가진 NFT의 샘플 구현
contract SampleNFT is KIP17Full("SampleNFT ", "NFT"), KIP17Mintable, KIP17Pausable {

    event SetVariableBaseUri(address indexed minter, string uri);
    event SetTokenUriIndex(uint256 tokenId, uint256 index);
    mapping (uint256 => string) private _variableBaseUris;
    mapping (uint256 => uint256) private _tokenUriIndex;

    //발행 한도
    uint256 public mintLimit = 10000;

    //특정 토큰의 Uri index를 기반으로 적절한 Uri를 리턴
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "KIP17Metadata: URI query for nonexistent token");
        string memory _uri = _variableBaseUris[_tokenUriIndex[tokenId]];
        return string(abi.encodePacked(_uri, Strings.fromUint256(tokenId)));
    }

    //특정 index를 가진 Base Uri를 리턴
    function variableBaseUri(uint256 index) public view returns (string memory) {
        return _variableBaseUris[index];
    }

    //특정 index에 Base Uri를 저장
    function setVariableBaseUri(uint256 index, string memory uri) public onlyMinter {
        _variableBaseUris[index] = uri;
        emit SetVariableBaseUri(msg.sender, uri);
    }

    //특정 토큰의 Uri index를 지정한다. 권한을 가진 트리거 계약이 호출할 수 있다.
    function setTokenUriIndex(uint256 tokenId, uint256 index) public onlyMinter {
        require(_exists(tokenId), "KIP17Metadata: URI query for nonexistent token");
        _tokenUriIndex[tokenId] = index;
        emit SetTokenUriIndex(tokenId, index);
    }

    function mint(address to, uint256 tokenId) public onlyMinter returns (bool) {
        require(totalSupply() < mintLimit, "Mint limit exceeded");
        return super.mint(to, tokenId);
    }

    function batchMint(address to, uint256[] calldata tokenId) external onlyMinter {
        for (uint256 i = 0; i < tokenId.length; i ++) {
            mint(to, tokenId[i]);
        }
    }

    function batchTransfer(address to, uint256[] calldata tokenId) external {
        for (uint256 i = 0; i < tokenId.length; i ++) {
            transferFrom(msg.sender, to, tokenId[i]);
        }
    }

    function exists(uint256 tokenId) public view returns (bool) {
        return _exists(tokenId);
    }

    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        return _tokensOfOwner(owner);
    }
}