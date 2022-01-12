// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HalaToken is  ERC20Burnable {
    uint private constant HARD_CAP = 1000_000_000e18; // 1b token

    /**
     * @dev Constructor function of HALA Token
     * @dev set name, symbol, and decimal of token
     * @dev mint total supply (cap) to address
     */
    constructor () ERC20("HALA Token", "HALA"){
        _mint(msg.sender, HARD_CAP);
    }
    

}