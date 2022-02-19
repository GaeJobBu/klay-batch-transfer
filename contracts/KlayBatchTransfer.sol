pragma solidity ^0.5.6;
import "./klaytn-contracts/math/SafeMath.sol";
//import "hardhat/console.sol";

contract KlayBatchTransfer{
    using SafeMath for uint256;

    //tolist에게 valueList만큼의 Klay를 전송한다.
    function batchTransfer(address payable[] calldata _toList, uint256[] calldata _valueList) external payable {
        require(_toList.length == _valueList.length, "Array length is different");

        uint256 i = 0;
        uint256 totalValue = 0;

        //tx에 포함된 klay와 총 전송 잔고가 일치하는지 확인.
        for (i; i < _valueList.length; i ++) {
            totalValue = totalValue.add(_valueList[i]);
            //console.log("valueList[%d] = %d", i, _valueList[i]);
            //console.log("totalValue = %d", totalValue);
        }
        require(msg.value == totalValue, "Incorrect transfer amount");

        //실제 전송
        for (i = 0; i < _toList.length; i ++)
        {
            _toList[i].transfer(_valueList[i]);
        }
    }
}