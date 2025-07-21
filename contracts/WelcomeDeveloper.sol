//SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
contract WelcomeDevelopers{
    
    string smessage="Welcome Developers to Ethereum !"; //state var

    function getMessage()public view returns(string memory){
        return smessage;
    }

    function setMessage(string memory lmessage)public {
        smessage = lmessage;
    }
    function getBalance()public view  returns(uint){
        return address(this).balance;
    }
    
}